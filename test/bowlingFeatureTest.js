var expect = require('expect');
var Browser = require('zombie');
var url = 'http://localhost:3000/index'
Browser.localhost('localhost', 3000);

describe('Player can record bowling scores', function() {
  var browser = new Browser(
    // waitDuration: 29*1000
  );

  before(function(done) {
    browser.visit(url, function() {
    done();
});
  });

  it('loads successfully', function() {
    browser.assert.success();
  });

  it('has a title', function() {
    browser.assert.text('title', 'Bowling Scorecard');
  });

  describe('home page', function(){
    it ('welcomes player', function(){
      browser.assert.text('h1[id=welcome]','Bowling Scorecard');
    });
  });

  describe('playing', function() {
    it('a player can record a score', function() {
      browser.select('select[id=current-frame]', 'Frame 1');
      browser.pressButton('4');
      browser.pressButton('3');
      browser.pressButton('confirm')
      browser.assert.text('td[id=row-0-1]', '7');
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
