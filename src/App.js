import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom'
import routes from './router'
import './App.scss'
const AppPage = () => (
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
