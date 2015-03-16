/* jshint expr:true */
import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Acceptance: LocationsPage', function() {
  beforeEach(function() {
    App = startApp();
  });

  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  it('can visit /locations', function() {
    visit('/locations');

    return andThen(function() {
      expect(currentPath()).to.equal('locations');
    });
  });
});
