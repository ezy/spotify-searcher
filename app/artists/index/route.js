import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    }
  },
  // model: function() {
  //   return this.store.findAll('artists');
  // }
  model() {
    let request = Ember.$.ajax('https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin', data => data);
    console.log(request);
    return request;
  },
  setupController(controller, payload) {
    const model = payload.artists;
    this._super(controller, model);
  }
});
