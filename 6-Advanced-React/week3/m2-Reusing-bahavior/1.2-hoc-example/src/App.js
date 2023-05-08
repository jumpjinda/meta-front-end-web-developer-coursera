import ClickIncrease from "./components/ClickIncrease";
import HoverIncrease from "./components/HoverIncrease";

export default function App() {
  return (
    <div className="App">
      <ClickIncrease secretWord={"DeerWhiteGirl"} />
      <HoverIncrease />
    </div>
  );
}
