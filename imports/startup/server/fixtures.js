import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import Items from '../../api/items/items';

Meteor.startup(function() {
  if (Items.find().count() === 0) {
    _.times(1000, num => {
      const content = `item ${num + 1}`;
      Items.insert({ content });
    });
  }
});