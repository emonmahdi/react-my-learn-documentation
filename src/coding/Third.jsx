import { useState } from "react";

const Third = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #000",
        margin: "10px 0",
      }}
    >
      <h2>2. Coding Exercise: Show and Hide element </h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide element blow" : "Show element blow"}{" "}
      </button>
      {show && <h3>Important Text...</h3>}
    </div>
  );
};

export default Third;
