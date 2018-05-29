import React, {Component} from 'react'
import './home.scss'
class App extends Component {
  render () {
    return (
      <div>
        <div className='text'>
          home
        </div>

        <img src={require('./cash.png')} />
      </div>
    )
  }
}

export default App
