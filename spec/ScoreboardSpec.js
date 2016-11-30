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

  it('empty frame initalized', function(){
    expect(scoreboard.frames.length).toEqual(1);
  });

  it('can go to to next frame', function(){
    scoreboard.nextFrame();
    expect(scoreboard.frames.length).toEqual(2);
  });

  describe('First roll', function() {
    it('can save information about first roll of frame', function(){
      scoreboard.saveFirstRoll(hits);
      expect(scoreboard.frames[0].roll1).toEqual(expectedHits);
    });
  });

  describe('Second roll', function() {
    it('can save information about the second roll of frame and creates new frame', function() {
      scoreboard.saveFirstRoll(hits);
      scoreboard.saveSecondRoll(hits);
      expect(scoreboard.frames[0].roll2).toEqual(expectedHits);
      expect(scoreboard.frames.length).toEqual(2);
    });

    it('throws an error if first roll not saved.', function() {
      var message = 'Roll first';
      expect(function() { scoreboard.saveSecondRoll(hits); }).toThrowError(message);
    });
  });

  describe('Third roll - 10th Frame only', function() {
    it('can save information about the third roll of last frame', function() {
      for (var i = 9; i > 0; i--){
        scoreboard.saveFirstRoll(hits);
        scoreboard.saveSecondRoll(hits);
      }
      scoreboard.lastFrame(hits, 6);
      expect(Object.keys(scoreboard.frames[9]).length).toEqual(3);
    });

    it('throws an error if 3rd roll in final frame is not available', function(){
      var message = 'Unlucky'
      expect(function() { scoreboard.saveThirdRoll(5); }).toThrowError(message);
    });
  });

});
