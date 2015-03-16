import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("teachers");
  this.resource("teacher", { path: '/teachers/:teacher_id'}, function() {
    this.route("new-email");
  });
  this.resource("locations", function() {
    this.route("show", { path: '/:location_id'});
  });

  this.resource("home");
  this.resource("emails");
});

export default Router;
