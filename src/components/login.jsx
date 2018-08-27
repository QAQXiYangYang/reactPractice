import React, {Component} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
const Title = styled.h1`
  color: palevioletred;
  font-size: 1.5em;
  text-align: center;
`
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`
const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

class Appp extends Component {
  render () {
    return (
      <div style={{color: this.props.themeColor}}>
     login
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {themeColor: state.themeColor}
}
Appp = connect(mapStateToProps)(Appp)

export default Appp
