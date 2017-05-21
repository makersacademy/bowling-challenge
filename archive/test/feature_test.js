
const Browser = require('zombie');
var app = require('../app.js')
var expect = require('chai').expect
var assert = require('assert');
Browser.localhost('localhost', 4001);

describe('User visits signup page', function() {
  const browser = new Browser();
  beforeEach(function(done) {
    browser.visit('/', done);
  });

  it('lands on homepage', function() {
    browser.assert.text('h1','TEN PIN BOWLING');
  })
});
