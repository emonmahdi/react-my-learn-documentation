import FirstJSX from "./coding/FirstJSX";
import Five from "./coding/Five";
import Four from "./coding/Four";
import Second from "./coding/Second";
import Parent from "./coding/Six/Parent";
import Third from "./coding/Third";
import Child from "./coding/Six/Child";
import Eight from "./coding/Eight";
import Nine from "./coding/Nine";
import Ten from "./coding/Ten";
import CurrencyConverter from "./components/CurrencyConverter";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          background: "gray",
          padding: "10px 15px",
        }}
      >
        React My Practice Docs
      </h2>
      <CurrencyConverter />
      <Stopwatch />
      <FirstJSX />
      <Second />
      <Third />
      <Four />
      <Five />
      {/* <Parent /> */}
      <Parent>
        <Child />
      </Parent>
      <Eight />
      <Nine />
      <Ten />
    </>
  );
}

export default App;
