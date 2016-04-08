import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('ember-inplace-edit', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it use the `ember-inplace-edit-default` CSS class', function(assert) {
  assert.expect(1);
  var component = this.subject();

  this.render();
  assert.ok(component.$().attr('class').indexOf('ember-inplace-edit-default') !== -1);
});
