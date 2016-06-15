import React, { Component, PropTypes } from 'react';
import Items from '../components/Items/Items';

export default class AppLayout extends Component {
  constructor(props) {
    super(props);

    // set default state
    this.state = {};
  }

  render() {
    const { items, count, subscriptionsTime } = this.props;
    return (
      <div>
        <h1>Items ({count}): Meteor 1.3.2.4 ver.</h1>
        <p>Time: {subscriptionsTime}ms</p>
        <Items items={items} />
      </div>
    );
  }
}

AppLayout.propTypes = {
  items: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
  subscriptionsTime: PropTypes.number,
};
