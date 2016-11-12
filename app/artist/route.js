import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.ajax({
        url: `https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin`
    }).then(function(response) {
      return response.artists.map((data) => {
        return data;
      });
    });
  }
});
