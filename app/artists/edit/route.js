import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('artists', params.artist_id);
  },

  actions: {
    saveArtist(newArtist) {
      newArtist.save().then(() => this.transitionToRoute('artists'));
    },
    willTransition(transition) {
      let model = this.controller.get('model');
      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
        if (confirmation) {
          model.rollBackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
