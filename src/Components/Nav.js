import React, { Component } from 'react';
import logo from '../../Assets/logo.jpg';
import hamburger from '../../Assets/hamburger.jpg';

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <img src={logo} />
        <div className='info'>
          <span className='navInfo'>212.555.555</span>
          <span className='navInfo'>LOGIN</span>
          <img className='navInfo' src={hamburger} />
        </div>
      </div>
    );
  }
};

export default Nav;