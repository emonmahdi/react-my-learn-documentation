// import { useState } from "react";

/* eslint-disable react/prop-types */
const Square = ({ value, onSquareClick }) => {
  /*   const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue("X");
  }; */

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
