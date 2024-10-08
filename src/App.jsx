import { useState } from "react";
import Parrafo from "./components/Parrafo";
function App() {
  const name = "App Name";
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>{name}</h1>
      <Parrafo parrafo={`Counter: ${counter}`} />

      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}

export default App;
