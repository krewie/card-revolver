import { Card } from "./components/Card";
import { CardDeck } from "./components/CardDeck";

export default function App() {
  const card1Slides = ["Front", "Back", "More"];
  const card2Slides = ["Quiz", "Explanation", "Summary"];

  return (
    <CardDeck
      cards={[
        <Card key="card1" slides={card1Slides.map((s) => <div>{s}</div>)} />,
        <Card key="card2" slides={card2Slides.map((s) => <div>{s}</div>)} />,
      ]}
    />
  );
}
