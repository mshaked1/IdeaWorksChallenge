import React, { Component } from 'react';
import GridItem from './GridItem';
import GridInfo from '../Assets/GridInfo';

let gridItems = Object.keys(GridInfo).map((item) => {
  return GridInfo[item];
});
class Grid extends Component {
  render() {
    let gridElements = gridItems.map((item, index) => {
      return <GridItem key={index} index={index} date={item.date} title={item.title} />
    });
    return (
      <div className='grid'>
        {gridElements}
      </div>
    );
  }
};

export default Grid;