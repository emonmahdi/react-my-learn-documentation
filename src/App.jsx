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
// import CurrencyConverter from "./components/CurrencyConverter";
import Stopwatch from "./components/Stopwatch";
import Problems from "./coding-problems/Problems";
import BDCurrencyConverter from "./coding-problems/BDCurrencyConverter";
import Sample from "./coding-problems/Sample";
import ProblemTen from "./coding-problems/Problem2";
import TaskOne from "./components/TenCodingProblem/TaskOne";
import TaskTwo from "./components/TenCodingProblem/TaskTwo";
import TaskThree from "./components/TenCodingProblem/TaskThree";
import TaskFour from "./components/TenCodingProblem/TaskFour";
import UserRegistrationForm from "./components/TenCodingProblem/TaskFive";
import UserSignUpForm from "./components/TenCodingProblem/TaskSix";

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
      <Problems />
      <BDCurrencyConverter />
      {/* <CurrencyConverter /> */}
      <Stopwatch />
      <Sample />
      <ProblemTen />
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
      <TaskOne />
      <TaskTwo />
      <TaskThree />
      <TaskFour />
      <UserRegistrationForm />
      <UserSignUpForm />
    </>
  );
}

export default App;
