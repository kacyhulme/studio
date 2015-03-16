import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('teacher');
  },

  deactivate: function() {
    this.controllerFor('teachers').set('savedSuccessfully', false);
  }
});
