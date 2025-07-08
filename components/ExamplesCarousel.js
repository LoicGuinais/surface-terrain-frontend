// components/ExamplesCarousel.js
export default function ExamplesCarousel() {
  const examples = [
    {
      title: '“Billet aller-retour TER Paris Lyon”',
      co2: '4.6 kgCO₂e',
      uncertainty: '20% incertitude',
      category: 'Train grandes lignes',
    },
    {
      title: '« HP Probook Q4 * 5 »',
      co2: '780 kgCO₂e',
      uncertainty: '50% incertitude',
      category: 'Ordinateur, 5 unités',
    },
    {
      title: '« Commande acier, 3 tonnes »',
      co2: '6633 kgCO₂e',
      uncertainty: '10% incertitude',
      category: 'Acier ou fer blanc',
    },
    {
      title: '« Chaises réu * 4 (invoice 78339) »',
      co2: '74.4 kgCO₂e',
      uncertainty: '10% incertitude',
      category: 'Chaise, 4 unités',
    },
  ];

  return (
    <section id="exemples" className="fade-in">
      <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">
        Exemples de calculs carbone
      </h2>
      <div className="overflow-x-auto scroll-smooth hide-scrollbar">
        <div className="flex space-x-4 pb-2 snap-x snap-mandatory">
          {examples.map((ex, i) => (
            <div
              key={i}
              className="min-w-[250px] bg-black text-gray-100 rounded-xl p-4 border border-gray-700 shadow-md flex-shrink-0 snap-center"
            >
              <p className="font-semibold mb-2">{ex.title}</p>
              <p>
                {ex.co2}
                <br />
                {ex.uncertainty}
                <br />
                {ex.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
