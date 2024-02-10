import { Component } from "react";

class Sample extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Name:", this.state.name);
    alert(this.state.name);
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Sample;
