import React from 'react';

class Fish extends React.Component {
  render() {
    return (
      <div className="menu-fish">
        <li>A Fish! (from fish component)</li>
        <img src={this.props.details.image} alt=""/>
        {this.props.details.desc}
        {this.props.details.price}
        {this.props.details.status}

      </div>
    );
  }
}

export default Fish;
