import React, { Component } from 'react'
import Turntable from './turntable'
import { connect } from 'react-redux'

class Index extends Component {
  constructor (props){
    super(props)
    this.canvas = React.createRef()
    this.div = React.createRef()
  }
  componentDidMount(){
    // canvas元素保存在this.canvas的current属性中
    const canvas = this.canvas.current
    // 获取canvas的上下文,context含有各种api用来操作canvas
    const context = canvas.getContext('2d')
    // 设置canvas的宽高
    canvas.width = 300
    canvas.height = 300
    // 创建turntable对象,并将canvas元素和context传入
    const turntable = new Turntable({canvas: canvas, context: context})
    turntable.startRotate()

  }

  render () {
    return (
      <div  ref={this.div}>
        <canvas
          ref={this.canvas}
          style={{
            width: '300px',
            height: '300px',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
            zIndex:100
          }}>
        </canvas>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {themeColor: state.themeColor}
}
Index = connect(mapStateToProps)(Index)
export default Index
