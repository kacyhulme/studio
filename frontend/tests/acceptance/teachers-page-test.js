/* jshint expr:true */
import Ember from 'ember';
import startApp from '../helpers/start-app';

var App;

describe('Acceptance: TeachersPage', function() {
  beforeEach(function() {
    App = startApp();
  });

  afterEach(function() {
    Ember.run(App, 'destroy');
  });

  describe('visiting /teachers', function() {
    beforeEach(function() {
      visit('/teachers');
    });

    it('can visit /teachers', function() {
      andThen(function() {
        expect(currentPath()).to.equal('teachers');
        expect($("body").text()).to.include("Katie");
      });
    });

    describe("sending an email", function() {
      beforeEach(function() {
        click(".spec-email-link:first");
        fillIn(".spec-email-input", "bob@example.com");
        fillIn(".spec-message-input", "Here is my message to this teacher");
        click(".spec-send-button");
      });
      it("redirects to teachers page", function() {
        expect(currentURL()).to.equal('/teachers');
      });
      it("displays a success message", function() {
        expect($(".spec-success-message").text()).to.include("Your email was sent");
      });
    });

  });
});
