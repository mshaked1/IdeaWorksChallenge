import React, { Component } from 'react';
import Nav from './Nav';
import Carousel from './Carousel';
import Grid from './Grid';
import Footer from './Footer';

class App extends Component {
  render(){
    return(
      <div>
        <Nav />
        <Carousel />
        <Grid />
        <Footer />
      </div>
    )
  }
}

export default App;