/*
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import routes from './router'
import "./App.css"
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
)
const SidebarExample = () => (
    <Router>
        <div style={{ display: 'flex' }}>
            <div style={{
                padding: '10px',
                width: '40%',
                background: '#f0f0f0'
            }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/bubblegum">Bubblegum</Link></li>
                    <li><Link to="/shoelaces">Shoelaces</Link></li>
                    <li><Link to="/home2">home2</Link></li>
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
            <ReactCSSTransitionGroup
                transitionName="transitionWrapper"
                component="div"
                className="transitionWrapper"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
                style={{
                    height:'100%',

                }}
            >
            <div style={{ flex: 1, padding: '10px',position:'absolute' }}>
                {/!*{routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}*!/}
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route}/>
                ))}
            </div>
            </ReactCSSTransitionGroup>
        </div>
    </Router>
)

export default SidebarExample*/





import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Home1 from "./components/home"
// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
const Main = () => <h2>Main</h2>

const Sandwiches = () => <h2>Sandwiches</h2>

const Tacos = ({ routes }) => (
    <div>
        <h2>Tacos</h2>
        <ul>
            <li><Link to="/tacos/bus">Bus</Link></li>
            <li><Link to="/tacos/cart">Cart</Link></li>
        </ul>

        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
        ))}
    </div>
)

const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

////////////////////////////////////////////////////////////
// then our route config
const routes = [
    { path: '/sandwiches',
        component: Sandwiches
    },
    { path: '/tacos',
        component: Tacos,
        routes: [
            { path: '/tacos/bus',
                component: Bus
            },
            { path: '/tacos/cart',
                component: {Home1}
            }
        ]
    }
]

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
)

const RouteConfigExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/tacos">Tacos</Link></li>
                <li><Link to="/sandwiches">Sandwiches</Link></li>
            </ul>

            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
)

export default RouteConfigExample