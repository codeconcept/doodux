import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DoodEventForm from './components/DoodEventForm';
import DoodEventList from './components/DoodEventList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Doodux - planifiez vos événements</h1>
        </header>
        <div>
          <DoodEventForm />
          <DoodEventList doodEvents={this.props.doodevents} />
        </div>
        <br/>

      </div>
    );
  }
}

export default App;
