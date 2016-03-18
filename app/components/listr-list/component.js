import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['listr-list', 'list-group'],
  hidden: Ember.computed.alias('list.hidden'),
  classNameBindings: ['hidden:listr-list--hidden'],
  store: Ember.inject.service(),
  actions: {
    toggleList: function () {
      var id = this.get('list.id');
      var store = this.get('store');

      store.findRecord('list', id).then(function (list) {
        list.toggleProperty('hidden');
        list.save();
      });
    }
  }
});
