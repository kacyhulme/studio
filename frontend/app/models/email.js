import DS from 'ember-data';

var Email = DS.Model.extend({
  sender: DS.attr("string"),
  receiver: DS.attr("string"),
  body: DS.attr("string")
});

export default Email;
