import React from "react"
import Loadable from 'react-loadable'
import LoadingComponent from './components/loading/index'
const _Loadable = function (src) {
 Loadable({
   loader: () => import(src),
   loading: LoadingComponent,
 })
}
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>
      点击左边导航栏开始react
    </div>,
    component: _Loadable('./components/defalut')
  },
  {
    path: '/home',
    sidebar: () => <div>1</div>,
    component: _Loadable('./components/home')
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>2</div>,
    component:_Loadable('./components/login')
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>3</div>,
    component: _Loadable('./components/login')
  }
]

export default routes