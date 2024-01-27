import { useState } from "react";

const Nine = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #000",
      }}
    >
      <h2>9. Coding Exercise: Counter App</h2>
      <div>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <h2
          style={{
            margin: "5px 15px",
          }}
        >
          {counter}
        </h2>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default Nine;
