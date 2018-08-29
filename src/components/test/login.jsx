import React, {Component} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Button } from '@storybook/react/demo'
import { action } from '@storybook/addon-actions'

class Appp extends Component {
  render () {
    return (
      <div>
        Storybook
        {this.props.name}
        <Button onClick={action('clicked')}>Hello Button</Button>
       {/* <img src={require('../cash.png')} alt="" />*/}
      </div>
    )
  }
}

export default Appp
