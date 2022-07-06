import useGlobalState from "./hooks/useGlobalState";
import { GlobalProvider } from "./contexts/GlobalContext";

import Layout from "./components/Layout/Layout";

import "./App.scss";
import "./fonts/RobotoMono-Regular.ttf";

function App() {
  const globalState = useGlobalState();

  return (
    <div className="App">
      <GlobalProvider value={globalState}>
        <Layout />
      </GlobalProvider>
    </div>
  );
}

export default App;
