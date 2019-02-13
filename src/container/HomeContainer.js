import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {FormattedMessage} from 'react-intl';

// actions
import AppActions from "../actions/AppActions";
// components

import { withIntl } from "../HOC/IntlWrapper";

class HomeContainer extends React.Component {

  switchLanguage(lang) {
    this.props.actions.switchLanguage(lang);
  }

  render() {
    const locale = this.props.locale;
    return (
      <div className="app">
        Hello World!
        <br/>
        <FormattedMessage id="Welcome Post"/>
        <br/>
        {
          locale === 'en' &&
          <div className="lang-switcher" onClick={() => this.switchLanguage('zh')}>
            切换中文
          </div>
        }
        {
          locale === 'zh' &&
          <div className="lang-switcher" onClick={() => this.switchLanguage('en')}>
            Switch to English
          </div>
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    locale: state.root.getIn(['app', 'locale'])
  }), dispatch => ({
    actions: bindActionCreators(Object.assign({}, AppActions), dispatch),
  })
)(HomeContainer);