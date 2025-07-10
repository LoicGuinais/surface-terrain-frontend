export async function fetchParcelles(codePostal, min = 0, max = 1000, limit = 40) {
  const res = await fetch(`https://surface-terrain-backend.onrender.com/parcelles?code_postal=${codePostal}&min=${min}&max=${max}&limit=${limit}`);
  if (!res.ok) throw new Error('Erreur API');
  return await res.json();
}