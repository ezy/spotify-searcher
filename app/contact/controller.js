import Ember from 'ember';

export default Ember.Controller.extend({

  message: '',

  isNotEmpty: Ember.computed.notEmpty('message'),
  correctMsgLength: Ember.computed.gte('message.length', 5),
  isValid: Ember.computed.and('isNotEmpty', 'correctMsgLength'),

  actions: {
    sendMessage: function()  {
      let email = this.get('emailAddress');
      let message = this.get('message');

      let responseMessage = 'To: ' + email + ', Message: ' + message;

      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
