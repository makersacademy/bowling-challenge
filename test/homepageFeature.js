var chai = require('chai');
var expect = chai.expect;

describe('homepage', function () {

  it('hello worlds', function(done) {
    browser
      .url('http://localhost:3000')
      .getText('body', function(err, text) {
        expect(text).to.equal('Hello world')
      })
      .call(done);
    });

});
