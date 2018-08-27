import React, {Component} from "react"
import Loadable from 'react-loadable'
import LoadingComponent from './components/Loading'

const HomeComponent = Loadable({
  loader: () => import('./components/home'),
  loading: LoadingComponent,
})
const Home1Component = Loadable({
  loader: () => import('./components/login'),
  loading: LoadingComponent,
})
const DefalutComponent = Loadable({
  loader: () => import('./components/defalut'),
  loading: LoadingComponent,
})

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>点击左边导航栏开始react</div>,
    component: DefalutComponent
  },
  {
    path: '/home',
    sidebar: () => <div>1</div>,
    component:HomeComponent
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>2</div>,
    component:Home1Component
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>3</div>,
    component: Home1Component
  }
]

export default routes