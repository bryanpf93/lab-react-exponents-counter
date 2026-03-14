import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import Exponent from "./components/Exponent";


function App() {

  const [count, setCount] = useState(0);

  const decrement = () => setCount((prevCount) => {
    return prevCount > 0 ? prevCount - 1 : prevCount
  });

  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2><em>Counter</em></h2>

      <Counter counter={count} onIncrement={increment} onDecrement={decrement} />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">

        {/** 1º solucion
        <Exponent counter={count} power={2} />
        <Exponent counter={count} power={3} />
        <Exponent counter={count} power={4} />
        <Exponent counter={count} power={5} />
        <Exponent counter={count} power={6} />
         */} 

        {/** 2º Solucion */}
        {[2, 3, 4, 5, 6].map((power) => (
          <Exponent key={power} counter={count} power={power} />
        ))}


      </div>
    </div>
  );
}

export default App;
