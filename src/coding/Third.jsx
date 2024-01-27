import { useState } from "react";

const Third = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h4>2. Coding Exercise: Display array of users to browser</h4>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide element blow" : "Show element blow"}{" "}
      </button>
      {show && <h3>Important Text...</h3>}
    </div>
  );
};

export default Third;
