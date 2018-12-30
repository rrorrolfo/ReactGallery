import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import axios from "axios";
import apiKey from "./config";
import Header from "./components/Header";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Photocontainer from "./components/Photocontainer";


class App extends Component {

  state = {
    images: []
  }

  ////////// DATA request from Flicker API

  componentDidMount() {
    //automatcally displays images when component is mounted
    this.performSearch();
  }

  performSearch = (tags = "ducks") => {

    // axios request from Fliker API*
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ac3cf133f7f530a931a5910384ce3c25&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
    
  .then(response => {
    // handle response
    this.setState({
      images: response.data.photos.photo
    });
  })

  .catch(error => {
    // handle error
    console.log("there was an error getting the data", error);
  });

  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Search onSearch={this.performSearch}/>
          <Nav />
          <Photocontainer images={this.state.images}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
