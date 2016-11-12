import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: Playlist', {
  beforeEach: function() {
    application = startApp();
    originalConfirm = window.confirm;
    window.confirm = function() {
      confirmCalledWith = [].slice.call(arguments);
      return true;
    };
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
    window.confirm = originalConfirm;
    confirmCalledWith = null;
  }
});

test('visiting /playlists without data', function(assert) {
  visit('/playlists');

  andThen(function() {
    assert.equal(currentPath(), 'playlists.index');
    assert.equal(find('#blankslate').text().trim(), 'No Playlists found');
  });
});

test('visiting /playlists with data', function(assert) {
  server.create('playlists');
  visit('/playlists');

  andThen(function() {
    assert.equal(currentPath(), 'playlists.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new playlists', function(assert) {
  visit('/playlists');
  click('a:contains(New Playlists)');

  andThen(function() {
    assert.equal(currentPath(), 'playlists.new');


    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing playlists', function(assert) {
  server.create('playlists');
  visit('/playlists');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'playlists.edit');


    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing playlists', function(assert) {
  server.create('playlists');
  visit('/playlists');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'playlists.show');

  });
});

test('delete a playlists', function(assert) {
  server.create('playlists');
  visit('/playlists');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'playlists.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
