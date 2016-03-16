import DS from 'ember-data';

export default DS.Model.extend({
  done: DS.attr('boolean')
  content: DS.attr('string'),
});
