import DS from  'ember-data';

export default  DS.RESTfulAdapter.extend({
  host: "https://api.spotify.com",
  namespace: "v1"
});
