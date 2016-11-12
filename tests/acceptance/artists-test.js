import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var application;
var originalConfirm;
var confirmCalledWith;

module('Acceptance: Artist', {
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

test('visiting /artists without data', function(assert) {
  visit('/artists');

  andThen(function() {
    assert.equal(currentPath(), 'artists.index');
    assert.equal(find('#blankslate').text().trim(), 'No Artists found');
  });
});

test('visiting /artists with data', function(assert) {
  server.create('artists');
  visit('/artists');

  andThen(function() {
    assert.equal(currentPath(), 'artists.index');
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('create a new artists', function(assert) {
  visit('/artists');
  click('a:contains(New Artists)');

  andThen(function() {
    assert.equal(currentPath(), 'artists.new');


    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('update an existing artists', function(assert) {
  server.create('artists');
  visit('/artists');
  click('a:contains(Edit)');

  andThen(function() {
    assert.equal(currentPath(), 'artists.edit');


    click('input:submit');
  });

  andThen(function() {
    assert.equal(find('#blankslate').length, 0);
    assert.equal(find('table tbody tr').length, 1);
  });
});

test('show an existing artists', function(assert) {
  server.create('artists');
  visit('/artists');
  click('a:contains(Show)');

  andThen(function() {
    assert.equal(currentPath(), 'artists.show');

  });
});

test('delete a artists', function(assert) {
  server.create('artists');
  visit('/artists');
  click('a:contains(Remove)');

  andThen(function() {
    assert.equal(currentPath(), 'artists.index');
    assert.deepEqual(confirmCalledWith, ['Are you sure?']);
    assert.equal(find('#blankslate').length, 1);
  });
});
