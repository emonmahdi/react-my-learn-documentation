import { useState } from "react";

const Five = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <div
        style={{
          padding: "20px",
          border: "1px solid #000",
          margin: "10px 0",
        }}
      >
        <h2>5. Coding Exercise:: Disable a button Conditionally</h2>
        <form>
          <h3>Disable Button with conditions: </h3>
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter text..."
          />
          <button disabled={value.length < 1}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Five;
