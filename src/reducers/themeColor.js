let defaultState = "linear-gradient(to bottom right, #F97794 , #F0FF00)"

const themeReducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {themeColor: action.themeColor}
    default:
      return  {themeColor: state} // 没有修改，返回原来的对象
  }
}
export default themeReducer
