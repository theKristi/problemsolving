import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './NavBar';
import Problem from './Problem'
class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Navbar />
        <Problem problem={this.props.problems[0]} />
      </div>
    );
  }
}

export default App;
