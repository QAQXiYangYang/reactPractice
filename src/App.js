/*import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";*/
// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.


/*
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
*/
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Routes from './router1'
import Loadable from 'react-loadable';
import Loading from './components/home';
const LoadableComponent = Loadable({
  loader: () => import('./components/login'),
  loading: Loading,
});
const Home = Loadable({
  loader: () => import('./components/home'),
  loading: Loading,
});



const AmbiguousExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/repos">1</Link>
        </li>
        <li>
          <Link to="/about">2</Link>
        </li>
      </ul>
     {/* <Routes/>*/}

        <Route path="/repos" component={LoadableComponent}/>
        <Route path="/about" component={Home}/>


    </div>
  </Router>
);

const About = () => <h2>About</h2>;
const Company = () => <h2>Company</h2>;
const User = ({ match }) => (
  <div>
    <h2>User: {match.params.user}</h2>
  </div>
);

export default AmbiguousExample;