import { useEffect, useState } from "react";

const Problems = () => {
  const [count, setCount] = useState(0);
  const names = ["Brian", "Paul", "Krug", "Halley"];
  const listItems = names.map((name, index) => <li key={index}>{name}</li>);
  useEffect(() => {
    console.log("Component rendered successfully");
  }, []);
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #000",
        margin: "10px 0",
      }}
    >
      <h2>This is problems solution component</h2>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You clicked {count} times</p>
      <ul>{listItems}</ul>;
    </div>
  );
};

export default Problems;
