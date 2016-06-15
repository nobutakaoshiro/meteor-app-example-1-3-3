import { createContainer } from 'meteor/react-meteor-data';
import Items from '../../api/items/items';
import { Meteor } from 'meteor/meteor';
import '../../api/items/methods';
import AppLayout from '../layouts/AppLayout';

let startedAt;
let finishedAt;

export default createContainer(() => {
  const itemsHandle = Meteor.subscribe('Items.all');
  const loading = !itemsHandle.ready();

  if (!startedAt) {
    startedAt = new Date();
    console.log("start!", startedAt);
  }

  let subscriptionsTime = 0;
  if (!loading && !finishedAt) {
    finishedAt = new Date();
    console.log("finish!", finishedAt);
    subscriptionsTime = finishedAt - startedAt;
    console.log("subscriptionsTime: ", subscriptionsTime);
  }
  return {
    loading,
    subscriptionsTime,
    items: Items.find({}, {sort: {createdAt: -1}}).fetch(),
    count: Items.find().count(),
  };
}, AppLayout);