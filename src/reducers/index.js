const themeReducer = (state={themeColor: 'yellow'}, action) => {
  console.log(state)

  switch (action.type) {
    case 'CHANGE_COLOR':
      return {themeColor: action.themeColor}
    default:
      return state // 没有修改，返回原来的对象
  }
}
export default themeReducer
