import React, { Component } from 'react';
import ShowAbout from '../../components/showAbout/showAbout';
import { Link } from 'react-router'
class About extends Component {
    
  render() {
    
    return (
    <div>
      <ShowAbout fullname='Tanutsun Theppornborisuth'></ShowAbout>
      <Link
            to={{ pathname: '/' }} className="btn btn-primary">
            Home
          </Link>
    </div>
    );
  }
}

export default About;
