import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Photocontainer from "./components/Photocontainer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <Nav />
        <Photocontainer />
      </div>
    )
  }
}

export default App;
