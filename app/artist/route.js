import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    Ember.$.getJSON('https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin', function(data) {
      console.log(data);
    });
  }
});
