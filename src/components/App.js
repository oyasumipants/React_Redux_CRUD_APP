import React , { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

class App extends Component {
  handleResetButton = () => {
    this.setState({ count: this.state.count * 0 })
  }

  handleDoubleButton = () => {
    this.setState({ count: this.state.count * 2 })
  }

  render() {
    const props = this.props

    return (
      <React.Fragment>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
        <button onClick={this.handleResetButton}>reset</button>
        <button onClick={this.handleDoubleButton}>double</button>
        <div>value: {props.value}</div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ value: state.count.value })
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
