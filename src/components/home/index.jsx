import React, { Component } from 'react'
import { connect } from 'react-redux'

class Index extends Component {


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
Index = connect(mapStateToProps)(Index)
export default Index