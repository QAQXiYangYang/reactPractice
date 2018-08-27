import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {


  render () {
    return (
      <div style={{backgroundColor: this.props.themeColor}}>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {themeColor: state.themeColor}
}
Home = connect(mapStateToProps)(Home)
export default Home