export default function() {
this.get('/playlists');
this.get('/playlists/:id');
this.post('/playlists');
this.del('/playlists/:id');
this.patch('/playlists/:id');
this.get('/artists');
this.get('/artists/:id');
this.post('/artists');
this.del('/artists/:id');
this.patch('/artists/:id');
this.get('/albums');
this.get('/albums/:id');
this.post('/albums');
this.del('/albums/:id');
this.patch('/albums/:id');

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'https://api.spotify.com';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/v1';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
