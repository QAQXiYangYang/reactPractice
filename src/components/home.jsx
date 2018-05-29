import React, {Component} from 'react'
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import ticker from 'rc-tween-one/lib/ticker';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import InputNumber from 'antd/lib/input-number';
import Radio from 'antd/lib/radio';
import Icon from 'antd/lib/icon';
import { enquireScreen } from 'enquire-js';
import PropTypes from 'prop-types';
import './home.scss'
class App extends Component {

  render () {
    return (
      <div>
        <div className='text'>
          home
        </div>

        <img src={require('./cash.png')} />
      </div>
    )
  }
}

export default App
