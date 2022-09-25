import "./styles.css";
import { useState } from "react";
export default function App() {
  let [count, setcount] = useState(0);

  const countinc = () => {
    setcount(++count);
  };
  const countdec = () => {
    setcount(--count);
  };
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={countinc}>+</button>
      <button onClick={countdec}>-</button>
    </div>
  );
}
