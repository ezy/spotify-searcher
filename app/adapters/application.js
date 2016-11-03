// import FirebaseAdapter from 'emberfire/adapters/firebase';
import DS from  'ember-data';

export default  DS.RESTfulAdapter.extend({
  host: "https://api.spotify.com",
  namespace: "v1"
});

// export default FirebaseAdapter.extend({
// });
