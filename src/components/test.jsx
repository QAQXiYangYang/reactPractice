import React, { Component } from 'react';
import simpleHoc from './wrapper';
import Turntable from './turntable';

class Usual extends Component {
  constructor (props){
    super(props)
    this.canvas =  React.createRef()
  }
  componentDidMount(){
    const canvas = this.canvas.current
    const context = canvas.getContext('2d')
    // 设置canvas的宽高
    canvas.width = 300
    canvas.height = 300
    const turntable = new Turntable({canvas: canvas, context: context})
    turntable.startRotate()
  }
  render() {
   // console.log(this.props, 'props');


    return (
      <div>
        <canvas
          //ref={this.canvas}
          ref={this.canvas}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
          }}>
        </canvas>
      </div>

    )
  }
}
export default simpleHoc(Usual);
