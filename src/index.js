import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import {createLogger} from 'redux-logger'
import App from './App'


import registerServiceWorker from './registerServiceWorker'
import store from './store/store'
// 使用日志打印方法， collapsed让action折叠，看着舒服。
const loggerMiddleware = createLogger({collapsed: true});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root'))

// 主要是用于在生产环境中为用户在本地创建一个service worker 来缓存资源到本地，提升应用的访问速度
registerServiceWorker()
