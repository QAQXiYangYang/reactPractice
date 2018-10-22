import React from "react"
import Loadable from 'react-loadable'
import LoadingComponent from './components/loading/index'
import Wrapper from './components/wrapper'

const asyncComponent = (options) => {
  return Loadable({
    loading: (props) => {
      if (props.error) {
        console.error(props.error);
      }
      return null;
    },
    render: (loaded, props) => {
      const Component = loaded.default;
      const WrappedComponent = Wrapper(Component);
      return <WrappedComponent {...props} />;
    },
    ...options
  });
};


const _Loadable = function (src) {
  src=  Loadable({
   loader: () => import(src),
   loading: LoadingComponent,
 })
}
const A = Loadable({
  loader: () => import('./components/home/index'),
  loading: LoadingComponent,
})
const B = Loadable({
  loader: () => import('./components/defalut'),
  loading: LoadingComponent,
})
const C = Loadable({
    loader: () => import('./components/test'),
  /*loader: () =>  Loadable({
    loader: () => import('./components/login'),
    loading: LoadingComponent,
  }),*/
  loading: LoadingComponent,
})
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
    component: A
  },
  {
    path: '/bubblegum',
    sidebar: () => <div>2</div>,
    component: Loadable({
      loader: () => import('./components/home/index'),
      loading: B,
    })
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>3</div>,
    component: C
  }
]

export default routes