import { Meteor } from 'meteor/meteor';
import Items from '../items';

Meteor.publish('Items.all', function() {
  return Items.find();
});