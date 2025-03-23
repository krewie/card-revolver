// useJLPTDeck.ts
import { useEffect, useState } from "react";
import supabase from "../supabase";

export interface Flashcard {
  id: string;
  kanji: string;
  jlpt: string;
}

export const useJLPTDeck = (level: string) => {
  const [data, setData] = useState<Flashcard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      setLoading(true);
      const { data: cards, error } = await supabase
        .from("kanji_with_kun_and_on")
        .select("*")
        .eq("jlpt", level);

      if (cards) setData(cards);
      setLoading(false);
    };

    fetchCards();
  }, [level]);

  return { data, loading };
};
