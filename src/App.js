import "./App.css";
import { Header } from "./components/Header";
import { Text } from "./components/Text";
import { Questions } from "./components/Questions";
import { End } from "./components/End";

function App() {
  return (
    <div className="App">
      <Header />
      <Text />
      <Questions />
      <End />
    </div>
  );
}

export default App;
