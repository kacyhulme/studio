import DS from 'ember-data';

var Teacher = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  bio: DS.attr('string')
});

export default Teacher;
