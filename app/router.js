import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('create');
  this.route('import');
  this.route('show');
  // this.route('show', { resetNamespace: true, path: ':cfg_id' }, function() {});
  this.route('notfound', { path: '*path' });
});

Router.reopen({
  notifyGoogleAnalytics: function() {
    if (!window.ga) {
      return;
    } else {
      return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
    }
  }.on('didTransition')
});

export default Router;
