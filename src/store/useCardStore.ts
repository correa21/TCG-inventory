import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Card } from "@/types/card";

interface CardStore {
  cards: Card[];
  addCard: (card: Card) => void;
  updateCard: (id: string, update: Partial<Card>) => void;
  removeCard: (id: string) => void;
}

export const useCardStore = create<CardStore>()(
  persist(
    (set) => ({
      cards: [],
      addCard: (card) => set((s) => ({ cards: [...s.cards, card] })),
      updateCard: (id, update) =>
        set((s) => ({
          cards: s.cards.map((c) => (c.id === id ? { ...c, ...update } : c)),
        })),
      removeCard: (id) =>
        set((s) => ({ cards: s.cards.filter((c) => c.id !== id) })),
    }),
    { name: "tcg-cards" }
  )
);
