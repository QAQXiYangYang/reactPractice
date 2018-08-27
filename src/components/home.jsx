import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  handleSwitchColor (color) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color)
    }
  }

  getRandomColor () {
    return 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 10) + ')'
  }

  render () {
    return (
      <div style={{backgroundColor: this.props.themeColor}}>
        <button
          style={{color: this.props.themeColor, marginLeft: '50px'}}
          onClick={() => {
            this.handleSwitchColor(this.getRandomColor())
          }}
        >Yellow
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {themeColor: state.themeColor}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({type: 'CHANGE_COLOR', themeColor: color})
    }
  }
}
Home = connect(mapStateToProps, mapDispatchToProps)(Home)
export default Home