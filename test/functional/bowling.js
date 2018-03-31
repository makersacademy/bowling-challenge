process.env.NODE_ENV = 'test';

var http = require("http");
var chai = require('chai');
var app = require('../../index');
var Browser = require('zombie');
var assert = require('assert');

  describe('scorecard page', function() {


    before(function() {
      this.server = http.createServer(app).listen(3000); 
      this.browser = new Browser ({ site: 'http://localhost:3000' });
      browser = this.browser
    });

    before(function(done) {
      browser.visit('/', done);
    });

    it('browser should load successfully', function() {
      assert.ok(browser.success);
    });

    it('page contains two inputs, one for entry and one for submit', function() {
      assert.ok(browser.element('form input[name=throw]'));
      assert.ok(browser.element('form input[name=throw_submit]'));
    });

    it('page contains labels of: score, frame and throw', function() {
      browser.assert.text('label', 'Score 0');
      browser.assert.text('label', 'Frame 1');
      browser.assert.text('label', 'Throw 1');
    });

    it('throw of 5 increase score by 5 and throw by 1', function() {
      browser.fill('throw', '5');
      browser.pressButton('throw_submit').then(function() {
        browser.assert.text('label', 'Score 5');
        browser.assert.text('label', 'Frame 1');
        browser.assert.text('label', 'Throw 2');
      }).then(done, done);
    });

    it('throw of 5 then 1 increase score by 6, returns throw to 1 and frame to 2', function() {
      browser.fill('throw', '5');
      browser.pressButton('throw_submit').then(function() {
        browser.assert.text('label', 'Score 6');
        browser.assert.text('label', 'Frame 2');
        browser.assert.text('label', 'Throw 1');
      }).then(done, done);
    });

    after(function(done) {
      this.server.close(done);
    });
});
