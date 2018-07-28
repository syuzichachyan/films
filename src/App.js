import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import  {Provider} from 'react-redux'

class App extends Component {
  render() {

    return (
        <Provider>
     <Login/>
        </Provider>
    );
  }
}

export default App;
