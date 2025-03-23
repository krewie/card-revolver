import { Card } from "./components/Card";
import { CardDeck } from "./components/CardDeck";
import { Slide } from "./components/Slide";
import { useJLPTDeck } from "./hooks/useJLPTDeck";

export default function App() {
  const { data } = useJLPTDeck("5");

  return (
    <CardDeck
      data={data}
      renderCard={(card) => (
        <Card
          slides={[
            <Slide key="kanji" sharedHeader={<h1 className="text-2xl text-white font-bold">{card.kanji}</h1>}>
              <p className="text-lg text-white">Meaning: {card.kanji}</p>
            </Slide>,
            <Slide key="reading">
              <p className="text-lg text-white">Reading: {card.kanji}</p>
            </Slide>,
          ]}
        />
      )}
    />
  );
}
