import Loadable from 'react-loadable'
import LoadingComponent from './components/loading/index'
import Wrapper from './components/wrapper'

/**
 *
 * @param options {loader: () => import('')}
 * @loading loading 组件
 * @returns {*}
 */
const until ={
  getRandomColor:()=> {
    //随机在数组取颜色
    const bgcColor =['#C2FFD8','#465EFB','#F97794','#92FFC0','#002661','#F0FF00','#FFA8A8']
    function  randomColor(){
      return bgcColor[Math.floor(Math.random()*bgcColor.length)]
    }
    return `linear-gradient(to bottom right, ${randomColor()} , ${randomColor()})`
  }
}

export default until
