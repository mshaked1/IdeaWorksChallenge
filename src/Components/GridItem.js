import React, { Component } from 'react';

class GridItem extends Component{
  render() {
    return(
      <div className='gridItem'>
        <img src={require(`../../Assets/Grid${this.props.index}.jpg`)} />
        <div className='date'>{this.props.date}</div>
        <div className='title'>{this.props.title}</div>
        <div className='author'>Presented by <span style={{textDecoration: 'underline'}}>LOREM IPSUM</span></div>
      </div>
    )
  }
}

export default GridItem;