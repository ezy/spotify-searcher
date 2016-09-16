import Ember from 'ember';

export default Ember.Controller.extend({

  message: '',

  isEmail: Ember.computed.match('email', /^.+@.+\..+$/),
  isNotEmpty: Ember.computed.notEmpty('message'),
  correctMsgLength: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isNotEmpty', 'correctMsgLength', 'isEmail'),

  actions: {
    sendMessage: function()  {

      let email = this.get('emailAddress');
      let message = this.get('message');

      const newContact = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newContact.save().then((response) => {
        this.set('responseMessage', response);
        this.set('emailAddress', '');
        this.set('message', '');
      });
    }
  }

});
