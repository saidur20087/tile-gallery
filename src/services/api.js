export const getTiles = async () => {
  const res = await fetch("https://tiles-gallery-psi.vercel.app/data.json",{cache:"no-store"});
 
  return res.json();
};

export const getTileById = async (id) => {
  const tiles = await getTiles();
  return tiles.find((tile) => tile.id === id);
};