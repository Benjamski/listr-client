import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['listr-list__listr-item'],
  done: Ember.computed.alias('item.done'),
  classNameBindings: ['done:listr-list__listr-item--done'],
  store: Ember.inject.service(),
  click: function () {
    var id = this.get('item.id');
    var store = this.get('store');

    store.findRecord('item', id).then(function (item) {
      item.toggleProperty('done');
      item.save();
    });
  }
});
