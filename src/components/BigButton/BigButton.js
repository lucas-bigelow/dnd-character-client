import React from 'react';
import { Link } from 'react-router-dom';
import './BigButton.css';

class BigButton extends React.Component {
  static defaultProps = {
    link: '/',
    title: 'Big Button'
  }
  
  render() {
    return (
      <Link to={this.props.link} className="item" id="big-button">{this.props.title}</Link>
    )
  }
}

export default BigButton;