var expect = require('expect');
var Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('Player can record bowling scores', function() {
  var browser = new Browser();

  // before(function(done) {
  //   browser.visit('/', done);
  // });

  describe('home page', function(){
    before(function(done) {
      browser.visit('/', done);
    });
    it ('welcomes player', function(){
      expect(browser.text('#welcome')).to.equal('Bowling Scorecard');
      done();
    });
  });

  describe('playing', function() {
    it('a player can record a score', function() {
      browser.select('current-frame', '0');
      browser.pressButton('4');
      browser.pressButton('3');
      browser.pressButton('#confirm')
      expect(browser.text('score.currentTotalScore')).to.equal(7);
    });
  });
});

// var expect = require('expect'),
// Browser = require('zombie'),
// browser = new Browser();
//
// describe('Loads pages', function(){
//
//     it('Google.com', function(done){
//
//         browser.visit("http://www.google.com", function () {
//             expect(browser.text("title")).to.equal('Google');
//             done();
//         });
//     });
//
// });
