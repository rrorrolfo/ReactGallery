import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import apiKey from "./config";
import Header from "./components/Header";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Photocontainer from "./components/Photocontainer";


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Search />
          <Nav />
          <Photocontainer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
