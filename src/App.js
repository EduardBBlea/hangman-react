import Screen from "./components/Screen/Screen";
import Keyboard from "./components/Keyboard/Keyboard";

import "./App.scss";
import "./fonts/RobotoMono-Regular.ttf";

function App() {
  return (
    <div className="App">
      <Screen />
      <Keyboard />
    </div>
  );
}

export default App;
