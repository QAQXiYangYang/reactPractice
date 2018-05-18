import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, HashRouter, IndexRoute} from 'react-router'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
ReactDOM.render(
        <App />
   ,
  document.getElementById('root'))

// 主要是用于在生产环境中为用户在本地创建一个service worker 来缓存资源到本地，提升应用的访问速度
registerServiceWorker()
