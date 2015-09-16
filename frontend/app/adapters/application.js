import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: 'api',
  host: 'http://api.ember-cli-101.com',
});
