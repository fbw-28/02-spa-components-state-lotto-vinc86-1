import React, { Component } from "react";
import "./num-pad.css";

export default class NumPad extends Component {
  state = {
    reset: [],
    numbers: [],
  };

  generateNumbers = () => {
    const array = [];
    for (let i = 0; i < 6; i++) {
      let num = Math.ceil(Math.random() * 49);
      if (array.includes(num)) {
        num = Math.ceil(Math.random() * 49);
      }
      array.push(num);
    }
    console.log(array);
    this.setState({ numbers: array });
  };

  clearNumbers = () => {
    this.setState({ numbers: this.state.reset });
  };

  render() {
    return (
      <>
        <div className="numbers-container">
          {this.state.numbers.map((number) => {
            return <div className="number">{number}</div>;
          })}
        </div>
        <div className="button-container">
          <button className="btn-reset" onClick={this.clearNumbers}>
            Reset
          </button>
          <button className="btn-generate" onClick={this.generateNumbers}>
            Show me lucky numbers
          </button>
        </div>
      </>
    );
  }
}
