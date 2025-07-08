export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://api.empreinteplus.com/classify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-empreinteplus-key': process.env.API_KEY  // ✅ uses your env var
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    console.log('Réponse API :', data); // ⬅️ ajoute ça
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur côté serveur', details: error.message });
  }
}
