import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./Card/Card";
import { Button } from 'reactstrap';
import Form from './Form';

class App extends Component {

  handleClick = () => {
      import('./moduleA')
          .then(({ moduleA }) => {
              fetch('/api/10000')
                  .then(function(response) {
                      return response.json();
                  })
                  .then(function(myJson) {
                      console.log(JSON.stringify(myJson));
                      document.getElementById('bt').firstChild.data = myJson.Number;
                  });
          })
          .catch(err => {
              // Handle failure
          });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Card />
          <div>
              <Button id='bt' onClick={this.handleClick}>Load{process.env.REACT_APP_SECRET_CODE}</Button>
          </div>
        <Form />
      </div>
    );
  }

}

export default App;
