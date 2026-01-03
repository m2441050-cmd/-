export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const body = req.body;
  const event = body?.events?.[0];
  if (!event) return res.status(200).end();

  const text = event.message?.text;
  const userId = event.source?.userId;

  // ボットに「kentaria」と送った人だけ登録
  if (text !== "kentaria" || !userId) {
    return res.status(200).end();
  }

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

  const r = await fetch(`${SUPABASE_URL}/rest/v1/couple_line_users`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_SERVICE_KEY,
      "Authorization": `Bearer ${SUPABASE_SERVICE_KEY}`,
      "Content-Type": "application/json",
      "Prefer": "resolution=ignore-duplicates"
    },
    body: JSON.stringify({
      couple_id: "kentaria",
      line_user_id: userId
    })
  });

  if (!r.ok) {
    const t = await r.text();
    return res.status(500).send(t);
  }

  return res.status(200).end();
}
