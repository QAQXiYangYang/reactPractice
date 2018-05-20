import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


import Loadable from 'react-loadable';
import Loading from './components/home';


const LoadableComponent = Loadable({
  loader: () => import('./components/login'),
  loading: Loading,
});


import Home1 from "./components/home"
import login from "./components/login"
// let Home1 = generatePageFunction("./components/home");
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>App!</div>,
    component: LoadableComponent
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>bubblegum!</div>,
    component:LoadableComponent
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    component: LoadableComponent
  }
]

export default routes