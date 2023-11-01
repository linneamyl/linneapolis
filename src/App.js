import logo from "./logo.svg";
import "./App.css";
import CtaContainer from "./components/ctaContainer";
import Confetti from "react-confetti";
import { useState, useRef, useEffect } from "react";
import Layout from "./components/layout";
import Body from "./components/body";

const ctaContents = {
  headind: "Lorem ipsum dolor sit",
  lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio.",
  buttonLabel: "Call to action",
  bodyText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
  tempor incididunt ut labore et dolore magna aliqua. Scelerisque varius \
  morbi enim nunc faucibus a pellentesque. Pellentesque diam volutpat \
  commodo sed egestas egestas fringilla. Fermentum posuere urna nec \
  tincidunt praesent semper feugiat. Metus aliquam eleifend mi in nulla \
  posuere sollicitudin aliquam ultrices. Orci ac auctor augue mauris \
  augue. Vulputate dignissim suspendisse in est. Habitasse platea dictumst \
  vestibulum rhoncus. Aliquet eget sit amet tellus cras adipiscing. Eu \
  turpis egestas pretium aenean pharetra magna ac placerat. Tellus orci ac \
  auctor augue mauris augue neque gravida in. Vitae elementum curabitur \
  vitae nunc sed velit dignissim sodales. Dictum non consectetur a erat \
  nam at lectus. Eu ultrices vitae auctor eu augue ut lectus arcu. Ornare \
  massa eget egestas purus viverra accumsan in nisl. Urna et pharetra \
  pharetra massa massa. Gravida in fermentum et sollicitudin ac orci \
  phasellus. Mattis enim ut tellus elementum sagittis. Elit pellentesque \
  habitant morbi tristique. In tellus integer feugiat scelerisque varius \
  morbi enim nunc. Nibh venenatis cras sed felis eget velit aliquet. \
  Euismod lacinia at quis risus sed vulputate odio. Urna molestie at \
  elementum eu. Ante in nibh mauris cursus.",
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

  return (
    <div ref={confetiRef}>
      <Layout>
        <div className="App">
          {showConfetti && (
            <Confetti
              width={width}
              height={height}
              onConfettiComplete={() => setShowConfetti(false)}
            />
          )}
          <Body text={ctaContents.bodyText} />
          <CtaContainer
            image={logo}
            heading={ctaContents.headind}
            lead={ctaContents.lead}
            buttonLabel={ctaContents.buttonLabel}
            onClick={onClick}
          />
        </div>
      </Layout>
    </div>
  );
}

export default App;
