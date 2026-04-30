export const getTiles = async () => {
  const res = await fetch("http://localhost:3000/api/tiles");
  return res.json();
};

export const getTileById = async (id) => {
  const tiles = await getTiles();
  return tiles.find((tile) => tile.id === id);
};