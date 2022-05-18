import "./App.css";
import { Header } from "./components/Header";
import { Questions } from "./components/Questions";
import { End } from "./components/End";

function App() {
  return (
    <div className="App">
      <Header />
      <Questions />
      <End />
    </div>
  );
}

export default App;
