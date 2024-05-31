import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  // i='ishaan'
  render() {
    return (
      <div>
        {/* Hello there {this.i} */}
        <Navbar/>
        <News/>
      </div>
    )
  }
}
