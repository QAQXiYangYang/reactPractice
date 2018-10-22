import React, { Component } from 'react';

const simpleHoc = WrappedComponent => {
  console.log('simpleHoc');
  return class extends Component {
    render() {
      return <div className='1'>
        <WrappedComponent {...this.props} />
      </div>
    }
  }
}
export default simpleHoc;