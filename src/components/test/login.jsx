import React, {Component} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Button } from '@storybook/react/demo'
import { action } from '@storybook/addon-actions'

class Appp extends Component {
  render () {
    return (
      <div>
        <Button onClick={action('clicked')} style={{color: this.props.name}}>
            {this.props.name}
        </Button>
      </div>
    )
  }
}

export default Appp
