process.env.NODE_ENV = 'test';
var http = require("http");
var chai = require('chai');
var app = require('../../index');
var Browser = require('zombie');
var expect = chai.expect;

  describe('scorecard page', function() {

    before(function() {
      this.server = http.createServer(app).listen(3000); 
      this.browser = new Browser ({ site: 'http://localhost:3000' });
    });

    before(function(done) {
      this.browser.visit('/', done);

    });

    it('should calculate a score for each frame');
    it('should receive an input for each throw');
    it('should calculate a final score');
    it('should be consistent with the rules of bowling'); 

    after(function(done) {
      this.server.close(done);
    });
});
