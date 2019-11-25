import React, { Component } from 'react';
import Front from './Front.js';

class SecondTask extends Component {
  state = {
    inputValue: '3B 4B 5G 6W'
  }

  handleChange = ({ target }) => {
    this.setState({
      inputValue: target.value
    });
  };
  render() {
    const { inputValue } = this.state;
    return (
      <div className="second-task">
        <h2>Task 2</h2>
        <input
          type='text'
          value={inputValue}
          onChange={this.handleChange}
          placeholder="state"
        />
        <Front input={inputValue}/>
      </div>
    );
  }
}
export default SecondTask;
