import { useState } from "react";

const Eight = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [total, setTotal] = useState("");

  const calculateTotal = () => {
    setTotal(number1 + number2);
  };

  return (
    <div
      style={{
        border: "2px solid #000",
        padding: "20px",
        margin: "10px 0",
      }}
    >
      <h2>8. Coding Exercise:Sum of Two Numbers</h2>

      <div
        style={{
          margin: "6px",
        }}
      >
        <label>First Number</label>
        <input
          type="text"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder="Input Number..   "
        />
      </div>
      <div
        style={{
          margin: "6px",
        }}
      >
        <label>Second Number</label>
        <input
          type="text"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
          placeholder="Input Numbe..  "
        />
      </div>
      <div>
        <button onClick={calculateTotal}>Add To Numbers</button>
        <span> = {total ? total : ""}</span>
      </div>
    </div>
  );
};

export default Eight;
