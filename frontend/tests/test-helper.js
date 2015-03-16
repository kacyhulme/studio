import resolver from './helpers/resolver';
import { setResolver } from 'ember-mocha';
import Pretender from 'pretender';
import Ember from 'ember';

setResolver(resolver);

Ember.onerror = function(error) {
  console.log(error);
  mocha.throwError(error);
};

beforeEach(function() {
  this.server = new Pretender(function() {
    this.get('/api/csrf', function(request) {
      return [
        200, {"Content-Type": "application/json"},
        JSON.stringify({
          "authenticity_token": "token"
        })
      ];
    });

    this.get('api/locations', function(request) {
      return [
        200, {"Content-Type": "application/json"},
        JSON.stringify({
          "locations": [
            {
              "id": 1,
              "name": "Downtown Studio",
              "street": "Main St",
              "city": "Winslow"
            },
            {
              "id": 2,
              "name": "Uptown Studio",
              "street": "Ellington Ln",
              "city": "Ellington"
            },
            {
              "id": 3,
              "name": "Southside Studio",
              "street": "Baker St",
              "city": "Valleytown"
            },
            {
              "id": 4,
              "name": "Midtown Studio",
              "street": "Inca St",
              "city": "Monterey"
            }
          ]
        })
      ];
    });

    this.get('api/teachers', function(request) {
      return [
        200, {"Content-Type": "application/json"},
        JSON.stringify({
          "teachers": [
            {
              "id": 1,
              "name": "Katie Marks",
              "email": "katie@example.com",
              "bio": "I love yoga"
            },
            {
              "id": 2,
              "name": "Chris Daniels",
              "email": "chris@example.com",
              "bio": "Working out and yoga is pretty much all I do"
            },
            {
              "id": 3,
              "name": "Adam Alexander",
              "email": "adam@example.com",
              "bio": "I do yoga for fun and run marathons"
            },
            {
              "id": 4,
              "name": "Nina Jones",
              "email": "nina@example.com",
              "bio": "I was born to teach yoga"
            }
          ]
        })
      ];
    });

    this.post('api/emails', function(request) {
      return [
        200 , {}, JSON.stringify({
          "email": {
            "id": 68,
            "receiver": "chris@example.com",
            "sender": "ablkaksdjf",
            "body": "lkadjflkajsfd"
          }
        })
      ];
    });
  });

  this.server.unhandledRequest = function(type, path) {
    var error = new Error("Unhandled Route" + type + path);
    throw error;
  };
});

afterEach(function() {
  this.server.shutdown();
});
