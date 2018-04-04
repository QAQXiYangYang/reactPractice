import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import routes from "./router"
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

            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
)

export default App




