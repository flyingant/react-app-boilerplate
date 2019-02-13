import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import { withIntl } from "../HOC/IntlWrapper";

class AppContainer extends React.Component {

  render() {
    return (
      <div className="app">
        { this.props.children }
      </div>
    );
  }
}

export default connect(
  state => ({
    locale: state.root.getIn(['app', 'locale'])
  }), dispatch => ({
    actions: bindActionCreators(Object.assign({}), dispatch),
  })
)(withIntl(AppContainer));