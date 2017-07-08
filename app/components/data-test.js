import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		logIt: function(person, oldIndex, newIndex) {
			console.log(person + ", " + oldIndex + ", " + newIndex)
		}
	}
});