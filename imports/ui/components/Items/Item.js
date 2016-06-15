import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);

    // set default state
    this.state = {};
  }

  render() {
    // const { item } = this.props;
    return (
      <li>&nbsp;</li>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
