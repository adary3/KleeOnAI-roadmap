const rateLimit = new Map();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const maxRequests = 10;

  if (!rateLimit.has(ip)) rateLimit.set(ip, []);
  const timestamps = rateLimit.get(ip).filter(t => now - t < windowMs);
  if (timestamps.length >= maxRequests) {
    return res.status(429).json({ error: "Too many requests. Come back in an hour." });
  }
  timestamps.push(now);
  rateLimit.set(ip, timestamps);

  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "No prompt provided" });

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1200,
        system: `You are KleeOnAI's career advisor — a sharp, no-nonsense mentor for African students. You speak directly, honestly, and specifically. You know the African job market deeply: Andela, Flutterwave, MTN, Safaricom, M-Pesa ecosystem, AFCFTA opportunities, Paystack, Jumia, local salaries vs remote USD rates, connectivity realities, and the gap between a degree and a real career. You also know global remote opportunities on Toptal, Deel, Remote.com, Turing, and smaller YC-backed startups. Never be generic. Always be specific, actionable, and grounded in the student's actual context. Be the mentor they never had.`,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    if (data.error) return res.status(500).json({ error: data.error.message });
    const text = data.content.map(b => b.text || "").join("");
    return res.status(200).json({ result: text });
  } catch (err) {
    return res.status(500).json({ error: "Generation failed. Try again." });
  }
}
