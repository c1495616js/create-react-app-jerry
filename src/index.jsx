import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import '@babel/polyfill';
import 'whatwg-fetch';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    const { name } = this.props;
    // eslint-disable-next-line react/jsx-one-expression-per-line
    return <div>Hello {name}</div>;
  }
}

App.propTypes = {
  // eslint-disable-next-line react/require-default-props
  name: PropTypes.string,
};

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name="Jerry" />, mountNode);
