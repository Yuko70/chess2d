import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';



let imageAdress = 'https://raw.githubusercontent.com/yuko70/chess2d/master/img/';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
