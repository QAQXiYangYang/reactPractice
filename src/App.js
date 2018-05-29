import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import routes from './router'
import './App.scss'
const AppPage = () => (
  <Router>
    <div className='app_page'>
      <div className='app_sidebar'>
        <ul>
          <li>
            <NavLink to='/' activeClassName='aa'>Home</NavLink >
          </li>
          <li>
            <NavLink to='/bubblegum' activeClassName='aa'>Bubblegum</NavLink >
          </li>
          <li>
            <NavLink to='/shoelaces' activeClassName='aa'>Shoelaces</NavLink >
          </li>
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

export default AppPage
