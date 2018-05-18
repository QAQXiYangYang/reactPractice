import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

function  getComponent(pageUrl) {
  return (nextState, cb) => {
    require.ensure([], require => {
      // default import is not supported in CommonJS standard
      cb(null, require(pageUrl).default)
    });
  };
}
import Home1 from "./components/home"
// let Home1 = generatePageFunction("./components/home");
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    component: getComponent('./components/home')
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    component: getComponent('./components/home')
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    component: getComponent('./components/home')
  }
]

export default routes