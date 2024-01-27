/* eslint-disable react/prop-types */
import { useState } from "react";
import Child from "./Child";

const Parent = ({ children }) => {
  const [value, setValue] = useState("Default Value!! Parent");
  return (
    <div
      style={{
        border: "2px solid #000",
        padding: "20px",
        margin: "10px 0",
      }}
    >
      <h2>6. Coding Exercise: Update the parent state</h2>

      <h4>Updating parent State Challenge</h4>
      <h4>Parent Component</h4>
      <p>{value}</p>

      <div>
        <Child setValue={setValue} />
      </div>

      <div
        style={{
          border: "2px solid #000",
          padding: "20px",
          margin: "10px 0",
        }}
      >
        <h2>
          7. Coding Exercise: Dynamically add child components (React Children)
        </h2>
        <h2>React Children</h2>
        <h3>{children}</h3>
      </div>
    </div>
  );
};

export default Parent;
