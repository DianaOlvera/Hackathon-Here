import React, { Component } from 'react';
import './App.css';
import LocationApp from './components/LocationApp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <p>REACT esta vivo!!!</p>
        <div>
        <LocationApp />
        </div>
      </div>
    );
  }
}

export default App;
