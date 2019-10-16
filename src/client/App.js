/**
 * @author Roman Myskovets, Sandeep Ravesh
 * @module client/App
 * @see module:client/index
*/

import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

/** The main component. */
export default class App extends Component {
  state = { username: null };

  /**
   * Invoked internally by React when the component 'mounts' to the DOM.
  */
  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  /**
   * Invoked internall by React to get the DOM inside the component.
   * @return the component's HTML
  */
  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
