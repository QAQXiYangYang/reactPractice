import React from "react";
import Loadable from 'react-loadable';
import MyLoadingComponent from './Loading';

const LoadableComponent = Loadable({
  loader: () => import('./home'),
  loading: MyLoadingComponent,
  delay: 300
});
/*const LoadableComponent = Loadable({
 loader: () => import('./components/login'),
 LoadingComponent: MyLoadingComponent,
 delay: 300
 });*/
export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
