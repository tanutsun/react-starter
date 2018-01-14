import React, { Component } from 'react';
import './showAbout.css'

class ShowAbout extends Component {
  render() {
    const { fullname } = this.props
    
    return (
      <div>
        <h2>My name is: <span className='text-light'>{fullname}</span></h2>
      </div>
    );
  }
}

export default ShowAbout;
