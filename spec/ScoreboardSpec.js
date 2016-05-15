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

  it('initializes with an empty frames array', function(){
    expect(scoreboard.frames.length).toEqual(0);
  });

  it('#nextFrame advances to next frame', function(){
    scoreboard.nextFrame();
    expect(scoreboard.frames.length).toEqual(1);
  });

  it('can save information about first roll of frame', function(){
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(hits);
    expect(scoreboard.frames[0].roll1).toEqual(expectedHits);
  });

  it('can save information about the second roll of frame', function() {
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(hits);
    expect(scoreboard.frames[0].roll2).toEqual(expectedHits);
  });

  it('can not save a second roll if first roll value is null', function() {
    scoreboard.nextFrame();
    var message = 'Must roll first ball silly';
    expect(function() { scoreboard.saveSecondRoll(hits); }).toThrowError(message);
  });

  it('calculates total score of frame', function() {
    var total = hits + hits;

    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(hits);
    expect(scoreboard.getCurrentScore()).toEqual(total);
  });

});
