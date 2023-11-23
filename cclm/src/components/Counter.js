import React, { Component } from 'react';
import './Counter.css'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: ''
    };
  }

  componentDidMount() {
    this.setMessage();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.setMessage();
    }
  }

  componentWillUnmount() {
    this.setState({
      count: 0,
      message: ''
    });
  }

  setMessage = () => {
    const { count } = this.state;
    const message = count % 2 === 0 ? 'Even' : 'Odd';
    this.setState({ message });
  };

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  resetCount = () => {
    this.setState({
      count: 0,
      message: ''
    });
  };

  render() {
    const { count, message } = this.state;
    return (
      <div className="counter-container">
        <p className="counter-value">Count: {count}</p>
        <p className="counter-message">Current count is {message}</p>
        <div className="counter-buttons">
          <button onClick={this.incrementCount}>Increment</button>
          <button onClick={this.resetCount}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
