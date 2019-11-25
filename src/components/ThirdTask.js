import React, { Component } from 'react';
import { states } from '../functions/states.js';
import Front from './Front';
import Condition from '../functions/condition.js';

class ThirdTask extends Component {
  state = {
    inputValue: '3B 4B 5B 6B',
    currentState: '',
    order: [],
    i: 0
  };
  handleChange = ({ target }) => {
    this.setState({
      inputValue: target.value
    });
  };
  stopTimer = () => {
    clearInterval(this.timer)
  };
  changeState = currentState => {
    this.setState(prevState => ({ currentState, i: prevState.i + 1}))
  };
  componentDidMount(){
    const steps = Condition(this.state.inputValue);
    const order = states(this.state.inputValue, steps)
    this.setState({ order })
    this.timer = setInterval(() => {
      this.changeState(order[this.state.i])
    }, 1000)
  };
  componentDidUpdate() {
    if (this.state.i >= this.state.order.length) {
      this.stopTimer()
    }
  };
  componentWillUnmount() {
    this.stopTimer()
  };
  render() {
    return (
      <div className="third-task">
        <h2>Task 3</h2>
        <Front input={this.state.currentState}/>
      </div>
    );
  };
}
export default ThirdTask;
