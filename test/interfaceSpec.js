var Browser = require ("zombie");

Browser.localhost("localhost", 4567);

describe('Bowling Challenge app interface', function(){

  var browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('basic page features', function(done){
    it ('shows a title page', function(){
      browser.assert.text('#msg', 'Welcome to Bowling!');
    });
  });

  describe('starting a game', function(done){
    before(function(done){
      browser.pressButton('Start new game', done)
    });
    it('lets you start a new game', function(){
      browser.assert.text('#msg', 'Game on!', done);
    });
  });

  describe('playing a game', function(done){
    before(function(done){
      browser.pressButton('Start new game', done)
    });
    it ('shows the score', function(){
      browser.assert.text('#score', 'Total Score: 0')
    })
    it('totals the score', function(){
      browser.select('#addRoll', '5')
      browser.pressButton('Add roll', done)
      browser.assert.text('#score', 'Total Score: 5')
    })
  });

});
