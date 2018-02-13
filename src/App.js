import React, { Component } from 'react';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import DoodEventForm from './components/DoodEventForm';
import DoodEventList from './components/DoodEventList';
import {addDoodEventActionCreator, removeDoodEventActionCreator} from './actions/doodEvent';

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
          <DoodEventForm addDoodEvent={this.props.addDoodEvent} />
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
const mapDispatchToProps = (dispatch) => {
  return {
      addDoodEvent: (doodEvent) => {
          dispatch(addDoodEventActionCreator(doodEvent));        
      },
       removeDoodEvent: (doodEventId) => {
          dispatch(removeDoodEventActionCreator(doodEventId));
      } 
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
