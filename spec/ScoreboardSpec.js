'use strict';

describe('Scoreboard', function() {
  var scoreboard;
  var hits;

  beforeEach(function() {
    scoreboard = new Scoreboard();
    hits = 4;
  });

  it('initalises empty frame first', function(){
    expect(scoreboard.frames.length).toEqual(0);
  });

  it('Can go to next frame', function(){
    scoreboard.nextFrame();
    expect(scoreboard.frames.length).toEqual(1);
  });

  it('get score of first roll', function(){
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(hits);
    expect(scoreboard.frames[0].roll1).toEqual(hits);
  });

  it('get score of second roll', function() {
    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(hits);
    expect(scoreboard.frames[0].roll2).toEqual(hits);
  });

  it('first roll cannot be saved if no bowling happened', function() {
    scoreboard.nextFrame();
    var message = 'Bowl first';
    expect(function() { scoreboard.saveSecondRoll(hits); }).toThrowError(message);
  });

  it('calculates frame total score', function() {
    var total = hits + hits;

    scoreboard.nextFrame();
    scoreboard.saveFirstRoll(hits);
    scoreboard.saveSecondRoll(hits);
    expect(scoreboard.getCurrentScore()).toEqual(total);
  });

});
