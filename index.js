/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-inplace-edit',
  included: function(app) {
    this._super.included.apply(this, arguments);
    app.import('vendor/ember-inplace-edit.css');
  }
};
