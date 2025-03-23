import { Card } from "./components/Card";
import { CardDeck } from "./components/CardDeck";

export default function App() {
  const card1Slides = ["Front", "Back", "More"];
  const card2Slides = ["Quiz", "Explanation", "Summary"];

  return (
    <div className="w-screen h-screen bg-black text-white">
      <CardDeck
        cards={[
          <Card
            key="card1"
            slides={card1Slides.map((s) => (
              <div>{s}</div>
            ))}
          />,
          <Card
            key="card2"
            slides={card2Slides.map((s) => (
              <div>{s}</div>
            ))}
          />,
          <Card
            sharedHeader={
              <div className="text-white font-bold text-[min(25vw,20rem)] text-center">
                女
              </div>
            }
            slides={[
              <div></div>,
              <div>
                <div className="text-white text-2xl text-center text-muted-foreground mb-2">
                  Radical: か
                </div>
                <div className="text-white text-xs text-center text-muted-foreground mb-2">
                  JLPT: 5 | Strokes: 4
                </div>

                <div className="text-white space-y-1 mb-2">
                  <div>
                    <strong>Kun:</strong> {" おんな、 め"}
                  </div>
                  <div>
                    <strong>On:</strong> {"ジョ、 ニョ、 ニョウ"}
                  </div>
                </div>
              </div>,
              <div>Slide 3 content</div>,
            ]}
          />,
        ]}
      />
    </div>
  );
}
