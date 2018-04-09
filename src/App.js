import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
)

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/tacos/bus">Tacos</Link></li>
                <li><Link to="/sandwiches">Sandwiches</Link></li>
            </ul>

            1
            1
          {/*  {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}*/}
        </div>
    </Router>
)

export default App




