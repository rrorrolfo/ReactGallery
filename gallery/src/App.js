import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import axios from "axios";
import apiKey from "./config";
import Header from "./components/Header";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Photocontainer from "./components/Photocontainer";
import NotFound from "./components/NotFound";


class App extends Component {

  state = {
    images: [],
    loading: true
  }

  ////////// DATA request from Flicker API

  componentDidMount() {
    this.performSearch();
}

  performSearch = (tags = "ducks") => {

    // axios request from Fliker API*
    axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=aea5cbb8f015c094c1feda44f7ca30fc&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
    
  .then(response => {
    // handle response
    this.setState({
      images: response.data.photos.photo,
      loading: false
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
          <Nav />
           <Search onSearch={this.performSearch}/>
            {
              (this.state.loading) ? <h1 style={{marginTop: "25px"}}>Loading.....</h1> : <Photocontainer images={this.state.images} displayImg={this.performSearch}/>
            }
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
