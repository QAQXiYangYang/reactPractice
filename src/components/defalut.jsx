import React, {Component} from 'react'
import { connect } from 'react-redux'
// import { addTodo } from '../actions'
import axios from 'axios'
import simpleHoc from './wrapper'
class Home extends Component {
    go =()=>{
        axios.get('/v2/movie/in_theaters').then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err.status);
        })
    }
  render () {

    return (
      <div>
        <button onClick={this.go}>clilc me</button>
      </div>
    )
  }
}
export default Home;
