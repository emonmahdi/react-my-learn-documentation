/* function ProblemTen() {
  const items = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
  ];
  const listItems = items.map((item) => <li key={item.id}>{item.text}</li>);
  return <ul>{listItems}</ul>;
}
export default ProblemTen; */

import { Component } from "react";

class ProblemTen extends Component {
  state = { count: 0 };
  handleClick = () => {
    // setTimeout(() => {
    //   this.setState({ count: this.state.count + 1 });
    // }, 2000);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ProblemTen;
