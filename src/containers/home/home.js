import React, { Component } from 'react';
import { Link } from 'react-router'
class Home extends Component {
  render() {
    return (
      <div>
        <p>
          Welcome to React Starter By NotTae
        </p>
        <Link
            to={{ pathname: '/about-us' }} className="btn btn-primary">
            About Me
          </Link>
      </div>
    );
  }
}

export default Home;
