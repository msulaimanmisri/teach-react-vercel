import ReactHero from "./hero";
import ReactImage from "./image";
import ReactText from "./text";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container my-5">
        <ReactHero />
        <ReactImage />
        <ReactText />
      </div>
    </div>
  );
}

export default App;
