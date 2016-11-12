import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');

  this.route('artists', function() {
    this.route('new');

    this.route('edit', {
      path: ':artists_id/edit'
    });

    this.route('show', {
      path: ':artists_id'
    });
  });
  this.route('playlists', function() {
    this.route('new');

    this.route('edit', {
      path: ':playlists_id/edit'
    });

    this.route('show', {
      path: ':playlists_id'
    });
  });
});

export default Router;
