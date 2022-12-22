import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <button onClick={() => this.props.onIncrement(this.props.id)}>+</button>
        <p>{this.props.count}</p>
        <button onClick={() => this.props.ondecrement(this.props.id)}>-</button>
      </div>
    );
  }
}

export default Counter;
