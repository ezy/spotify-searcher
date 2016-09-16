import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('artists');
  },

  actions: {
    saveArtist(newArtist) {
      newArtist.save().then(() => this.transitionTo('artists'));
    },
    willTransition() {
      this.controller.get('model').rollBackAttributes();
    }
  }

});
