import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Doodux - planifiez vos événements</h1>
        </header>
        <div>
          <form>
            <input type="text" placeholder="titre" /><br />
            <input type="text" placeholder="lieu" /><br />
            <input type="text" placeholder="note" /><br />
            <button type="submit">créer</button>
          </form>
        </div>
        <br/>
        <div>
          {this.props.doodevents.map(doodevent => (
            <div key={doodevent.id}>
              <div>
                <div>{doodevent.title}</div>
                <div>lieu : {doodevent.place}</div>
              </div>
              <hr/>
            </div>
          )

          )}
        </div>
      </div>
    );
  }
}

export default App;
