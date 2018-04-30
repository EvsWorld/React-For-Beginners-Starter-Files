import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
  render() {
    const {image, name, desc, price, status} = this.props.details;
    const isAvailable = status === 'available';
    return (
      <div className="menu-fish">
        <li>A Fish! (from fish component)</li>
        <img src={image} alt={name}/>
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <p>{status}</p>
        <button disabled={!isAvailable}>{!isAvailable ? 'SOLD OUT' : 'Add To Order'}</button>
      </div>
    );
  }
}

export default Fish;
