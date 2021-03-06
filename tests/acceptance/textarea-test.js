import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | textarea', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('edit text', function(assert) {
  visit('/demo-textarea');
  andThen(function() {
  click('.multi-line-text-wrapper:first .edit-box');
  andThen(function() {
  fillIn('.multi-line-text-wrapper:first textarea', 'Updated content');
  $('.multi-line-text-wrapper:first textarea').focusout();
  andThen(function() {
    assert.equal(find('.multi-line-text-wrapper:first .edit-box').text().trim(), 'Updated content', 'The text has been updated correctly');
  });
});
});
});
