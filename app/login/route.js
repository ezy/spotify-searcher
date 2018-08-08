import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signInViaSpotify: function(){
      var route = this,
          controller = this.controllerFor('login');
      // The provider name is passed to `open`
      this.get('session').open('spotify-oauth2').then(function(){
        route.transitionTo('dashboard');
      }, function(error){
        controller.set('error', 'Could not sign you in: '+error.message);
      });
    }
  }
});
