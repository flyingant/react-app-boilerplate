import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

// i18n
import {
  IntlProvider,
  addLocaleData,
} from 'react-intl';
/* Load Locales & Translations */
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
addLocaleData(en);
addLocaleData(zh);

const messages = {
  en: require('../locales/en.json'),
  zh: require('../locales/zh.json')
};

export const withIntl = (WrappedComponent) => {
  return class Wrapper extends React.Component {

    render() {
      const {locale} = this.props;
      return (
        <IntlProvider key={locale} locale={locale} messages={messages[locale]}>
          <WrappedComponent {...this.props} locale={locale}/>
        </IntlProvider>
      )
    }
  }
}