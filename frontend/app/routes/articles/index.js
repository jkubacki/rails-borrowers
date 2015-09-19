import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.modelFor('friends.show').get('articles');
  }
});
