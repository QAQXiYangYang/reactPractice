import React from "react"
import Untils from './untils'
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>
      点击左边导航栏开始react
    </div>,
    component: Untils.asyncComponent({
      loader: () => import('./components/defalut')
    })
  },
  {
    path: '/home',
    sidebar: () => <div>1</div>,
    component: Untils.asyncComponent({
      loader: () => import('./components/defalut')
    })

  },
  {
    path: '/bubblegum',
    sidebar: () => <div>2</div>,
    component: Untils.asyncComponent({
      loader: () => import('./components/home/index')
    })
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>3</div>,
    component: Untils.asyncComponent({
      loader: () => import('./components/test')
    })
  },
  {
    path: '/',
    sidebar: '',
    component: Untils.asyncComponent({
      loader: () => import('./components/404')
    })
  }
]

export default routes
