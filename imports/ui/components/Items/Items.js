import React, { Component, PropTypes } from 'react';
import Item from './Item';
import './Items.css';

export default class Items extends Component {
  constructor(props) {
    super(props);

    // set default state
    this.state = {};
  }

  render() {
    const { items } = this.props;
    return (
      <ul className="items">
        {items.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </ul>
    );
  }
}

Items.propTypes = {
  items: PropTypes.array.isRequired,
};
