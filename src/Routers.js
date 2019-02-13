import React from "react";
import {Router, IndexRoute, Route, hashHistory} from "react-router";
import AppContainer from "./container/AppContainer";
import HomeContainer from "./container/HomeContainer";

const Routers = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={HomeContainer}/>
        <Route path="/home" component={HomeContainer}/>
      </Route>
    </Router>
  )
};
export default Routers;