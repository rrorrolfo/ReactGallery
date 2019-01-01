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
    loading: true,
    navValues: ["ducks", "dogs", "birds"]
  }

  ////////// DATA request from Flicker API

  
  performSearch = (tags = "ducks") => {

    // axios request from Fliker API*
    axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
    
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
          <Nav displayImg={this.performSearch} 
          defaultValues={this.state.navValues}/>
           <Search onSearch={this.performSearch} history={this.props.history}/>

           <Route exact path="/" render={() => <Photocontainer images={this.state.images} onMounting={this.performSearch}/>}/>
          
           <Route exact path={"/:tag"} render={({match}) => <Photocontainer images={this.state.images} onMounting={this.performSearch} tag={match.params.tag}/>}/>

           <Route path={"/search/:tag"} render={({match}) => <Photocontainer images={this.state.images} onMounting={this.performSearch} tag={match.params.tag}/>}/> 


        </div>
      </BrowserRouter>
    )
  }
}

export default App;
