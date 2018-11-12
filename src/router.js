import React from "react"
import Loadable from 'react-loadable'
import LoadingComponent from './components/loading/index'
import Wrapper from './components/wrapper'
import Untils from './untils'

/**
 *
 * @param options {loader: () => import('')}
 * @loading loading 组件
 * @returns {*}
 */
const asyncComponent = (options) => {
  return Loadable({
    loading: LoadingComponent,
    render: (loaded, props) => {
      const Component = loaded.default;
      // 引入高阶组件
      const WrappedComponent = Wrapper(Component);
      return <WrappedComponent {...props}  />;
    },
    ...options
  });
};
console.log(Untils)
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>
      点击左边导航栏开始react
    </div>,
    component: asyncComponent({
      loader: () => import('./components/defalut')
    })
  },
  {
    path: '/home',
    sidebar: () => <div>1</div>,
    component: asyncComponent({
      loader: () => import('./components/defalut')
    })

  },
  {
    path: '/bubblegum',
    sidebar: () => <div>2</div>,
    component: asyncComponent({
      loader: () => import('./components/home/index')
    })
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>3</div>,
    component: asyncComponent({
      loader: () => import('./components/test')
    })
  }
]

export default routes
