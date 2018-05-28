import React, {Component} from "react";
import Loadable from 'react-loadable';
import LoadingComponent from './components/Loading';


const LoadableComponent = Loadable({
  loader: () => import('./components/home'),
  loading: LoadingComponent,
});
const HomeComponent = Loadable({
  loader: () => import('./components/login'),
  loading: LoadingComponent,
});
/*
const Component = Loadable({
  loader: () => import('./components/login'),
  loading: LoadingComponent,
});



*/

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
    component:HomeComponent
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    component: LoadableComponent
  }
]

export default routes