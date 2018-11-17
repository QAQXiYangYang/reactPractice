import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Shake } from 'reshake'
import './404.scss'
class errorPage extends Component {
  render () {
    return (
      <div className='errorPage'>
        <Shake
          h={5}
          v={5}
          r={3}
          dur={300}
          int={10}
          max={100}
          fixed={true}
          fixedStop={false}
          freez={true}>
          <div className='wrapper'>
            404
          </div>
        </Shake>
        <Link to='/'>回主页吧....</Link>
      </div>
    )
  }
}
// freez  交互式暂停动画 false
// fixed  自动播放？ 默认false

export default errorPage
