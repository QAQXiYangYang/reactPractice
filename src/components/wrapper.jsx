import React, { Component } from 'react';

const Wrapper = WrappedComponent => {
  // console.log('simpleHoc');
  return class extends Component {
    render() {
      console.log('高阶组件')
      const a = {
        a: 'a'
      }
      return <div className='1'>
        <WrappedComponent {...this.props} {...a} />
      </div>
    }
  }
}
export default Wrapper;
