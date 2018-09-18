import React, {Component} from "react"
import Loadable from 'react-loadable'
import LoadingComponent from './components/loading/index'

function _loader (src) {
  Loadable({
    loader: () => import(src),
    loading: LoadingComponent,
  })
}

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>点击左边导航栏开始react</div>,
    component: _loader('./components/defalut')
  },
  {
    path: '/home',
    sidebar: () => <div>1</div>,
    component:_loader('./components/home/index')
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>2</div>,
    component:_loader('./components/login')
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>3</div>,
    component:_loader('./components/login')
  }
]

export default routes