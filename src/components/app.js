import React, { Component } from 'react';
// want to always show header, so add to app component
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        Redux simple starter
      </div>
    );
  }
}
