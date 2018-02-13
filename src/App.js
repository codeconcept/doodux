import React, { Component } from 'react';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import DoodEventForm from './components/DoodEventForm';
import DoodEventList from './components/DoodEventList';

class App extends Component {
  render() {
    console.log('this.props ', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Doodux - planifiez vos événements</h1>
        </header>
        <div>
          <DoodEventForm />
          <DoodEventList doodEvents={this.props.doodEvents} />
        </div>
        <br/>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      doodEvents: state.doodEvents
  };
}

export default connect(mapStateToProps, null)(App);
