import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>&copy; 2017&mdash;SPARTA PLAESANT -
        <span style={{textDecoration: 'underline'}}>INSTAGRAM</span>
        -
        <span style={{textDecoration: 'underline'}}>FACEBOOK</span>
        -
        <span style={{textDecoration: 'underline'}}>TWITTER</span>
      </div>
    );
  }
};

export default Footer;