import { Card } from "@/types/card";
import { ScryfallCard } from "@/types/scryfall";

export const fromScryfall = (card: ScryfallCard): Card => ({
  id: card.id,
  name: card.name,
  imageUrl: card.image_uris?.normal ?? "",
  quantity: 1,
  condition: "NM",
  oracleText: card.oracle_text,
  colors: card.colors,
});
