import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveArtist(newArtist) {
      newArtist.save().then(() => this.transitionToRoute('artists'));
    },
    willTransition() {
      this.controller.get('model').rollBackAttributes();
    }
  }
});
