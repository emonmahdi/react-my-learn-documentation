/* eslint-disable react/prop-types */
const Child = ({ setValue }) => {
  return (
    <div>
      <h4>Child Component</h4>
      <button onClick={() => setValue("Parent component has been Update")}>
        Change value Parent
      </button>
    </div>
  );
};

export default Child;
