import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sorter');
  this.route('settings');
  this.route('menubuilder', function() {
    this.route('page', {path: "page/:page"});
  });
});

export default Router;