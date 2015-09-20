import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),
  hasStatus: Ember.computed.notEmpty('model.status'),
  isValid: Ember.computed.and(
    'hasDescription',
    'hasStatus'
  ),
  actions: {
    save() {
      if (this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
    }
  }
});
