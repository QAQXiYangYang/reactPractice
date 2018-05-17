import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import { Router, Route, IndexRoute, applyRouterMiddleware} from "react-router";
import Home1 from "./components/home"


function generatePageFunction(pageUrl) {
    return (nextState, cb) => {
        require.ensure([], require => {
            // default import is not supported in CommonJS standard
            cb(null, require(pageUrl).default)
        });
    };
}

/*
 const routes = [
 { path: '/',
 exact: true,
 sidebar: () => <div>home!</div>,
 main: () => <h2>Home</h2>
 },
 { path: '/bubblegum',
 sidebar: () => <div>bubblegum!</div>,
 main: () => <h2>Bubblegum</h2>
 },
 { path: '/shoelaces',
 sidebar: () => <div>shoelaces8!</div>,
 main: () => <h2>Shoelaces</h2>
 },
 { path: './home2',
 sidebar: () => <div>shoe1lace</div>,
 component: () => <Home1/>
 }
 ]
 */
let LoginIndex = generatePageFunction("./components/home");
let LoginIndex2 = generatePageFunction("./components/login");
const Routes = (
    <Router>
        <IndexRoute getComponent={LoginIndex}/>
    </Router>
)
export default routes