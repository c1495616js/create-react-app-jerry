import React from "react";
import ReactDOM from "react-dom";
import { hot } from 'react-hot-loader'
import '@babel/polyfill';
import 'whatwg-fetch';

class App extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById("app");
ReactDOM.render(<AppWithHot name="Jerry" />, mountNode);