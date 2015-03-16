/* jshint expr:true */
import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Acceptance: Root Page', function() {
  beforeEach(function() {
    App = startApp();
  });

  afterEach(function() {
    Ember.run(App, 'destroy');
  });
  describe('visiting / ', function() {
    beforeEach(function() {
      return visit('/');
    });

    it("shows the company name in the navbar", function() {
      console.log(currentRouteName());
      expect($(".spec-header").text()).to.equal("The Yoga Studio");
    });

  });
});
