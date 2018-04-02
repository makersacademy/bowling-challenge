var Browser = require ("zombie");

Browser.localhost("localhost", 4567);

describe('Bowling Challenge app interface - perfect game', function(){

  var browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('a perfect game', function(){
    before(function(done){
      browser.pressButton('Start new game');
      for (var i = 1; i <= 11; i++) {
        browser.select('#rollSelect', '10');
        browser.pressButton('Add roll');
      }
      browser.select('#rollSelect', '10');
      browser.pressButton('Add roll');
      done();
    });
    it ('scores 300', function(){
      browser.assert.text('#score', "Total Score: 300");
    });
    it ('knows it is finished', function(){
      browser.assert.text('#msg', "Game over! Perfect game!");
    });
  });
});
