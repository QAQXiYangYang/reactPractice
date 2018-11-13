import Loadable from 'react-loadable'
import LoadingComponent from './components/loading/index'
import Wrapper from './components/wrapper'
import React from 'react'

/**
 *
 * @returns {string} 随即在数组中取颜色
 */
const getRandomColor=()=> {
  const bgcColor =['#C2FFD8','#465EFB','#F97794','#92FFC0','#002661','#F0FF00','#FFA8A8']
  function  randomColor(){
    return bgcColor[Math.floor(Math.random()*bgcColor.length)]
  }
  return `linear-gradient(to bottom right, ${randomColor()} , ${randomColor()})`
};
/**
 *
 * @param options {loader: () => import('')}
 * @loading loading 组件
 * @returns {*}
 */

const asyncComponent=(options) => {
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
}


export default {
  getRandomColor,
  asyncComponent
}
