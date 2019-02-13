import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
// styles// styles
require('./stylesheet/css/main.css');
require('./stylesheet/scss/main.scss');

import configuredStore from "./store.development";
import Routers from "./Routers";

const TARGET_EL = document.getElementById('root');

if (!window.Intl) {
  require('intl');
}

const Root = () => {
  return (
    <Provider store={configuredStore()}>
      <React.Fragment>
        <Routers/>
        
      </React.Fragment>
    </Provider>
  )
}

ReactDOM.render(
  <Root/>,
  TARGET_EL
);