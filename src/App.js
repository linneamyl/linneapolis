import logo from "./logo.svg";
import "./App.css";
import CtaButton from "./components/ctaButton";
import Confetti from "react-confetti";
import { useState, useRef, useEffect } from "react";

const ctaContents = {
  headind: "Lorem ipsum dolor sit",
  lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio.",
  buttonLabel: "Call to action",
};

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confetiRef = useRef(null);

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);

  const onClick = () => {
    setShowConfetti(true);
  };

  if (showConfetti) {
    setTimeout(() => {
      setShowConfetti(false);
    }, "10000");
  }

  console.log(showConfetti);
  return (
    <div className="App" ref={confetiRef}>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      <header className="App-header">
        <CtaButton
          image={logo}
          heading={ctaContents.headind}
          lead={ctaContents.lead}
          buttonLabel={ctaContents.buttonLabel}
          onClick={onClick}
        />
      </header>
    </div>
  );
}

export default App;
