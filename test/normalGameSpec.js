var Browser = require ("zombie");

Browser.localhost("localhost", 4567);

describe('Bowling Challenge app interface - normal game', function(){

  var browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('a normal game', function(){
    before(function(done){
      browser.pressButton('Start new game');
      var gamerolls = [10, 8, 1, 10, 10, 7, 3, 5, 3, 0, 6, 10, 7, 3, 10, 8, 1]
      gamerolls.forEach(function(roll) {
        browser.select('#rollSelect', String(roll));
        browser.pressButton('Add roll');
      });
      done();
    });
    it ('scores 163', function(){
      browser.assert.text('#score', "Total Score: 163");
    });
    it ('knows it is finished', function(){
      browser.assert.text('#msg', "Game over!");
    });
  });
});
