import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		return this.modelFor('menubuilder').findBy('pName', params.page);
	}
});
