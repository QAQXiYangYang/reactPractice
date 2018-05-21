import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import routes from './router'
import Loadable from 'react-loadable';
import Loading from './components/home';


const SidebarExample = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <div
          style={{
              padding: "10px",
              width: "40%",
              background: "#f0f0f0"
          }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bubblegum">Bubblegum</Link>
          </li>
          <li>
            <Link to="/shoelaces">Shoelaces</Link>
          </li>
        </ul>

          {routes.map((route, index) => (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.sidebar}
              />
          ))}
      </div>
    <div style={{ flex: 1, padding: "10px" }}>
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
);

export default SidebarExample;