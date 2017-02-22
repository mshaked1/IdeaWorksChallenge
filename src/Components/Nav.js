import React, { Component } from 'react';
import logo from '../../Assets/logo.jpg';
import hamburger from '../../Assets/hamburger.jpg';

class Nav extends Component {
  render() {
    return (
      <div className='nav'>
        <ul>
          <li>
            <img src={logo} />
          </li>
          <li>212.555.555</li>
          <li>LOGIN</li>
          <li>
            <img src={hamburger} />
          </li>
        </ul>
      </div>
    );
  }
};

export default Nav;