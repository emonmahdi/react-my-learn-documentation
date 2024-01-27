import { useState } from "react";

const Four = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <h2>4. Coding Exercise:: 2 way data binding in ReactJS</h2>
      <form>
        <h3>Data binding Exercise: </h3>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter text..."
        />
        <h3>Show Input Value: {value}</h3>
      </form>
    </div>
  );
};

export default Four;
