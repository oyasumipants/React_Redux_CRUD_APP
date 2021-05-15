import React , { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  handleResetButton = () => {
    this.setState({ count: this.state.count * 0 })
  }

  handleDoubleButton = () => {
    this.setState({ count: this.state.count * 2 })
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
        <button onClick={this.handleResetButton}>reset</button>
        <button onClick={this.handleDoubleButton}>double</button>
        <div>count: {this.state.count}</div>
      </React.Fragment>
    )
  }
}

export default App;
