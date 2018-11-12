import Untils from '../untils'
const themeReducer = (state=Untils.getRandomColor(), action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {themeColor: action.themeColor}
    default:
      return  {themeColor: state} // 没有修改，返回原来的对象
  }
}
export default themeReducer
