import Ember from 'ember';

var TeacherNewEmailRoute = Ember.Route.extend({
  model: function() {
    return Ember.Object.create({
      bufferedContent: Ember.Object.create({
        sender: "",
        body: ""
      })
    });
  },

  actions: {
    send: function(bufferedContent) {
      var route = this;
      var record = this.store.createRecord('email', {
        receiver: this.modelFor('teacher').get('email'),
        sender: bufferedContent.get('sender'),
        body: bufferedContent.get('body')
      });
      record.save().then(function() {
        route.controllerFor('teachers').set('savedSuccessfully', true);
        route.transitionTo('teachers');
      }, function() {
        alert("That failed");
      });
    },

    cancel: function() {
      this.transitionTo('teachers');
    }
  }
});

export default TeacherNewEmailRoute;
