import { Mongo } from 'meteor/mongo';

class ItemsCollection extends Mongo.Collection {
  insert(doc, callback) {
    const ourDoc = doc;
    ourDoc.createdAt = ourDoc.createdAt || new Date();
    const result = super.insert(ourDoc, callback);
    return result;
  }

  update(selector, modifier) {
    return super.update(selector, modifier);
  }

  remove(selector) {
    return super.remove(selector);
  }
}

const Items = new ItemsCollection('Items');

Items.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

export default Items;