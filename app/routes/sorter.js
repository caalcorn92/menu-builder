import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Promise(function(resolve) {
        let data = Ember.$.getJSON('/data/test.json');
        resolve(data);
    });
  }
});