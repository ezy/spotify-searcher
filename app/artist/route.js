import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.ajax({
        url: `https://api.spotify.com/v1/search?q=david%20bowie&type=artist`
    }).then(function(response) {
      console.log(response);
      return response.artists.items.map((data) => {
        return data;
      });
    });
  }
});
