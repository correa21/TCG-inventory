export interface Card {
  id: string;
  name: string;
  imageUrl: string;
  quantity: number;
  condition: "NM" | "LP" | "MP" | "HP" | "DMG";
  oracleText?: string;
  colors?: string[];
}
