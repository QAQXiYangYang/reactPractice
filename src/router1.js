import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'


import Loadable from 'react-loadable';
import Loading from './components/home';


const LoadableComponent = Loadable({
  loader: () => import('./components/login'),
  loading: Loading,
});


import Home1 from "./components/home"
import login from "./components/login"
// let Home1 = generatePageFunction("./components/home");
/*const routes = (

    <Route path="/" component={Loading}>
      <Route path="/repos" component={Loading}/>
      <Route path="/about" component={Loading}/>
    </Route>


)*/
 class routes extends React.Component {
  render() {
    return
    <Route path="/" component={Loading}>
      <Route path="/repos" component={Loading}/>
      <Route path="/about" component={Loading}/>
    </Route>
  }
}


export default routes