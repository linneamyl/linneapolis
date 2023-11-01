import logo from "./logo.svg";
import "./App.css";
import CtaButton from "./components/ctaButton";

const ctaContents = {
  headind: "Lorem ipsum dolor sit",
  lead: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio.",
  buttonLabel: "Call to action",
};

function App() {
  const onClick = () => {
    console.log("jeeeee");
  };
  return (
    <div className="App">
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
