import React from "react"
import Untils from './untils'

console.log(Untils)
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
  }
]

export default routes
