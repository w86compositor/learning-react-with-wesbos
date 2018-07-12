import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    const order = "Add to Order";
    const soldOut = "Sold Out";
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => {
            this.props.addToOrder(this.props.index);
          }}
        >
          {isAvailable ? order : soldOut}
        </button>
      </li>
    );
  }
}

export default Fish;
