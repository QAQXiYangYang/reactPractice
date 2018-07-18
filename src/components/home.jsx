import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class Home extends Component {
  handleSwitchColor(color){
    if(this.props.onSwitchColor){
      this.props.onSwitchColor(color)
    }
  }
  render () {
    return (
      <div>
        <button
          style={{ color: this.props.themeColor, marginLeft:'50px'}}
          onClick={()=>{this.handleSwitchColor('green')}}
        >Yellow</button>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{themeColor: state.themeColor}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColor: (color) => {
      dispatch({ type: 'CHANGE_COLOR', themeColor: color })
    }
  }
}
Home = connect(mapStateToProps,mapDispatchToProps)(Home)
export default Home