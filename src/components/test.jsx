import React, { Component } from 'react';
import simpleHoc from './wrapper';

class Usual extends Component {
  render() {
    console.log(this.props, 'props');
    return (
      <div className="ada">
        Usual
      </div>
    )
  }
}
export default simpleHoc(Usual);