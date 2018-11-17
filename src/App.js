import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import routes from './router'
import until from '././untils'
import './App.scss'

class appPage extends Component {
  handleSwitchColor (color) {
    if (this.props.onSwitchColor) {
      this.props.onSwitchColor(color)
    }
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
                <NavLink to='/shoelaces' activeClassName='sidebarItem_a'>Shoelaces</NavLink >
              </li>
              <button
                style={{marginLeft: '50px'}}
                onClick={() => {
                  this.handleSwitchColor(until.getRandomColor())
                }}
              >换色
              </button>
            </ul>
          </div>
          <div className='app_content' style={{background: this.props.themeColor}}>
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
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
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
