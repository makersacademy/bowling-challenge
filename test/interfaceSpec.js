var Browser = require ("zombie");

Browser.localhost("localhost", 4567);

describe('Bowling Challenge app interface', function(){

  var browser = new Browser();

  before(function(done) {
    browser.visit('/', done);
  });

  describe('basic page features', function(done){
    it ('shows a title page', function(){
      browser.assert.text('#title', 'Bowling Scorecard');
    });
  });

  describe('starting a game', function(done){

    before(function(done){
      browser.pressButton('Start new game', done)
    });

    it('lets you start a new game', function(){
      browser.assert.text('#score', '0');
    });
  });

});
