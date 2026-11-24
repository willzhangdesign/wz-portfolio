import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { password } = req.body ?? {};
  const correctPassword = process.env.CASE_STUDY_PASSWORD;

  if (!correctPassword) {
    return res.status(500).json({ error: "Server misconfiguration" });
  }

  if (typeof password === "string" && password === correctPassword) {
    return res.status(200).json({ success: true });
  }

  return res.status(401).json({ error: "Incorrect password" });
}
