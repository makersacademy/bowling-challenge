var Browser = require ("zombie");

Browser.localhost("localhost", 4567);

describe('Bowling Challenge app interface - gutter game', function(){

  var browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('a gutter game', function(){
    before(function(done){
      browser.pressButton('Start new game');
      for (var i = 1; i <= 20; i++) {
        browser.select('#rollSelect', '0');
        browser.pressButton('Add roll');
      }
      done();
    });
    it ('scores 0', function(){
      browser.assert.text('#score', "Total Score: 0");
    });
    it ('knows it is finished', function(){
      browser.assert.text('#msg', "Game over! Gutter game!");
    });
  });
});
