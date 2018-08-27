import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom'
import routes from './router'
import './App.scss'

class appPage extends Component {
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
       <Router>
         <div className='app_page'>
         <div className='app_sidebar'>
           <ul>
             <li>
               <NavLink to='/home' activeClassName='sidebarItem_a'>Home</NavLink >
             </li>
             <li>
               <NavLink to='/bubblegum' activeClassName='sidebarItem_a'>Bubblegum</NavLink >
             </li>
             <li>
               1
               <NavLink to='/shoelaces' activeClassName='sidebarItem_a'>Shoelaces</NavLink >
             </li>
             <button
               style={{color: this.props.themeColor, marginLeft: '50px'}}
               onClick={() => {
                 this.handleSwitchColor(this.getRandomColor())
               }}
             >Yellow
             </button>
           </ul>
         </div>
         <div className='app_content'>
           <div className='app_crumbsBar'>
             {routes.map((route, index) => (
               <Route
                 key={index}
                 path={route.path}
                 exact={route.exact}
                 component={route.sidebar}
               />
             ))}
           </div>
           {routes.map((route, index) => (
             <Route
               key={index}
               path={route.path}
               exact={route.exact}
               component={route.component}
             />
           ))}
         </div>
       </div>
      </Router>
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
appPage = connect(mapStateToProps, mapDispatchToProps)(appPage)
export default appPage
