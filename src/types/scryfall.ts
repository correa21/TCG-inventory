export interface ScryfallCard {
  id: string;
  name: string;
  image_uris?: {
    normal: string;
    small?: string;
    large?: string;
  };
  oracle_text?: string;
  colors?: string[];
}
