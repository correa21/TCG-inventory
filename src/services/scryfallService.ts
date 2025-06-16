const API = "https://api.scryfall.com";

export const searchCards = async (query: string) => {
  const res = await fetch(`${API}/cards/search?q=${encodeURIComponent(query)}`);
  const json = await res.json();
  return json.data;
};
