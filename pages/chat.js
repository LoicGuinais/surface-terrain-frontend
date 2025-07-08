// pages/chat.js
import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';


export default function Chat() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const examples = [
      "billet TER aller-retour Marseille Lyon",
      "acheter 500 grammes de fraises",
      "prestation d'auditeurs financiers",
      "achat de 10 batteries AAA",
      "voyage en avion Paris → Bordeaux",
      "hébergement 2 nuits à Bordeaux",
      "achat de 200g de chocolat"
    ];
    let exampleIndex = 0;

    function rotatePlaceholder() {
  if (!inputRef.current) return;
  const example = examples[exampleIndex];
  let i = 0;

  const typing = setInterval(() => {
    // ✅ Ajoute cette vérification à chaque tick :
    if (!inputRef.current) {
      clearInterval(typing);
      return;
    }

    if (i <= example.length) {
      inputRef.current.placeholder = `Ex. ${example.substring(0, i++)}`;
    } else {
      clearInterval(typing);
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.placeholder = '';
        }
        exampleIndex = (exampleIndex + 1) % examples.length;
        setTimeout(rotatePlaceholder, 300);
      }, 1500);
    }
  }, 60);
}


    rotatePlaceholder();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmedDescription = description.trim();
    const parsedAmount = parseFloat(amount);
    if (!trimmedDescription || isNaN(parsedAmount)) return;

    setMessages((prev) => [
      ...prev,
      { sender: 'Vous', text: `${trimmedDescription} (${parsedAmount.toFixed(2)} €)` }
    ]);

    setDescription('');
    setAmount('');

    try {
      const res = await fetch('/api/classify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: trimmedDescription, amount: parsedAmount })
      });

      const data = await res.json();
      const parts = [
        data.final_category ? `<strong>Catégorie :</strong> ${data.final_category}` : '',
        data.origin && data.destination ? `📍 <strong>Trajet</strong> : ${data.origin} → ${data.destination} (${data.distance_km?.toFixed(1)} km)` : '',
        data.final_emission ? `<strong>Émissions :</strong> ${data.final_emission?.toFixed(1)} kgCO₂e` : '',
        data.source ? `<strong>Source :</strong> ${data.source}` : '',
        data.ef_value ? `<strong>Facteur :</strong> ${data.ef_value?.toFixed(3)} ${data.ef_unit || ''}` : ''
      ].filter(Boolean).join('<br />');

      setMessages((prev) => [
        ...prev,
        { sender: 'Empreinte IA', text: `<div class='bg-gray-800 border border-gray-700 rounded p-3 space-y-1'>${parts}</div>` }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'Erreur', text: err.message }
      ]);
    }
  }

  return (
  <>
    <Head>
      <title>Tester notre IA – Empreinte Plus</title>
      <meta name="description" content="Posez vos questions carbone à notre IA !" />
    </Head>

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-28 px-6 pb-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Tester Empreinte Plus</h1>

      <div className="space-y-4 border border-gray-700 rounded p-4 h-96 overflow-y-auto bg-gray-900 mb-6 shadow-inner">
        {messages.map((msg, i) => (
          <div key={i} dangerouslySetInnerHTML={{ __html: `<strong>${msg.sender} :</strong> ${msg.text}` }} />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:items-center">
        <input
          ref={inputRef}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="flex-1 px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
          placeholder="Ex : Achat de billets SNCF…"
          required
        />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          step="0.01"
          min="0"
          className="w-32 px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
          placeholder="€"
          required
        />
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow transition">
          Envoyer
        </button>
      </form>
    </div>
  </>
)
;
}
