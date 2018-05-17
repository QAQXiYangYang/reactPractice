import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute} from 'react-router'
import './index.css'
import App from './App'
import Home from './components/home'
import registerServiceWorker from './registerServiceWorker'
ReactDOM.render(
  <Home />,
  document.getElementById('root'))

// 主要是用于在生产环境中为用户在本地创建一个service worker 来缓存资源到本地，提升应用的访问速度
registerServiceWorker()
