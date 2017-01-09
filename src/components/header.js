// functional component (no app state, but will need logic based on what to render)
// always want to show this header component at top of app, whether signed in or out (don't put in router -> cuz that implies wont show it sometimes) (instead add it to app component, which is always shown)

import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            Sign in
          </li>
        </ul>
      </nav>
    )
  }
}

export default Header;