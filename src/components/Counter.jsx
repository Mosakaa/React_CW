import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 5
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <section className="panel counter">
        <h2>Counter</h2>
        <p>Count: {this.state.count}</p>
        <button type="button" onClick={this.incrementCount}>
          Increment
        </button>
      </section>
    );
  }
}

export default Counter;
