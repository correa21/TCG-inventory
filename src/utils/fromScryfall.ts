import { Card } from "@/types/card";

export const fromScryfall = (card: any): Card => ({
  id: card.id,
  name: card.name,
  imageUrl: card.image_uris?.normal ?? "",
  quantity: 1,
  condition: "NM",
  oracleText: card.oracle_text,
  colors: card.colors,
});
