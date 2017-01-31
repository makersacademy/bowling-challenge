'use strict';

describe('Scoreboard', function() {
  var scoreboard;
  var hits;
  var expectedHits;

  beforeEach(function() {
    scoreboard = new Scoreboard();
    hits = 4;
    expectedHits = 4;
  });

  it('initializes with a frames array containing one emtpy frame', function(){
    expect(scoreboard.frames.length).toEqual(1);
  });

  it('#nextFrame advances to next frame', function(){
    scoreboard.nextFrame();
    expect(scoreboard.frames.length).toEqual(2);
  });


  describe('First roll of frame', function() {

    it('can save information about first roll of frame', function(){
      scoreboard.saveFirstRoll(hits);
      expect(scoreboard.frames[0].roll1).toEqual(expectedHits);
    });
  });

  describe('Second roll of frame', function() {

    it('can save information about the second roll of frame and creates new frame', function() {
      scoreboard.saveFirstRoll(hits);
      scoreboard.saveSecondRoll(hits);
      expect(scoreboard.frames[0].roll2).toEqual(expectedHits);
      expect(scoreboard.frames.length).toEqual(2);
    });

    it('Throws an error if first roll is not saved before trying to save second', function() {
      var message = 'Must roll first ball silly';
      expect(function() { scoreboard.saveSecondRoll(hits); }).toThrowError(message);
    });
  });


  describe('Third roll of frame', function() {

    it('can save information about the third roll of last frame', function() {
      for (var i = 9; i > 0; i--){
        scoreboard.saveFirstRoll(hits);
        scoreboard.saveSecondRoll(hits);
      }
      scoreboard.lastFrame(hits, 6);
      expect(Object.keys(scoreboard.frames[9]).length).toEqual(3);
    });

    it('Throws an error if someone is trying to play third round of last frame without permission', function(){
      var message = 'Nope, no can do!'
      expect(function() { scoreboard.saveThirdRoll(5); }).toThrowError(message);
    });
  });

});
