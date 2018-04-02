var Browser = require ("zombie");

Browser.localhost("localhost", 4567);

describe('Bowling Challenge app interface', function(){

  var browser = new Browser();


  before(function(done) {
    browser.visit('/', done);
  });

  describe('basic page features', function(){
    it ('shows a title page', function(){
      browser.assert.text('#msg', 'Welcome to Bowling!');
    });
  });

  describe('starting a game', function(){
    before(function(done){
      browser.pressButton('Start new game');
      done();
    });
    it('lets you start a new game', function(){
      browser.assert.text('#msg', 'Game on!');
    });
  });

  describe('basic display', function(){
    before(function(done){
      browser.pressButton('Start new game');
      browser.select('#rollSelect', '5');
      browser.pressButton('Add roll');
      done();
    });
    it('totals the score', function(){
      browser.assert.text('#score', 'Total Score: 5');
    });
    it('displays a frame', function(){
      browser.assert.element('#frame1');
    });
    it('displays the score for an individual frame', function(){
      browser.select('#rollSelect', '3');
      browser.pressButton('Add roll');
      browser.assert.text('#frame1', "Frame 1: 8 (5) (3)");
    });
  })

  describe('basic multiple frame display', function(){
    before(function(done){
      browser.pressButton('Start new game');
      browser.select('#rollSelect', '5');
      browser.pressButton('Add roll');
      browser.select('#rollSelect', '4');
      browser.pressButton('Add roll');
      done();
    });
    it('displays multiple frames', function(){
      browser.select('#rollSelect', '3');
      browser.pressButton('Add roll');
      browser.assert.text('#frame2', "Frame 2: 3 (3)");
    });
  });

  describe('multiple frame display with strike bonus rolls', function(){
    before(function(done){
      browser.pressButton('Start new game');
      browser.select('#rollSelect', '10');
      browser.pressButton('Add roll');
      browser.select('#rollSelect', '4');
      browser.pressButton('Add roll');
      browser.select('#rollSelect', '4');
      browser.pressButton('Add roll');
      done();
    });
    it ('scores a strike and adds bonus rolls', function(){
      browser.assert.text('#frame1', "Frame 1: 18 (10) [4] [4]");
    });
  });

  describe('multiple frame display with spare bonus rolls', function(){
    before(function(done){
      browser.pressButton('Start new game');
      browser.select('#rollSelect', '5');
      browser.pressButton('Add roll');
      browser.select('#rollSelect', '5');
      browser.pressButton('Add roll');
      browser.select('#rollSelect', '4');
      browser.pressButton('Add roll');
      browser.select('#rollSelect', '4');
      browser.pressButton('Add roll');
      done();
    });
    it ('scores a spare and adds a bonus roll', function(){
      browser.assert.text('#frame1', "Frame 1: 14 (5) (5) [4]");
    });
  });
});
