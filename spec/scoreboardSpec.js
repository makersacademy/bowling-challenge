'use strict';

describe ('Scoreboard', function(){

  var scoreboard;

  beforeEach(function() {
    scoreboard = new Scoreboard;
  });

  it('start the frame at 0 points', function(){
    expect(scoreboard.totalFrameScore()).toEqual(0);
  });

  it('adds the first roll to the current frame score', function(){
    scoreboard.addFirstRoll(8);
    expect(scoreboard.totalFrameScore()).toEqual(8);
  });

  it('adds the second roll to the current frame score', function(){
    scoreboard.addSecondRoll(1);
    expect(scoreboard.totalFrameScore()).toEqual(1);
  });

  it('totals the first and second roll in the current frame score', function(){
    scoreboard.addFirstRoll(3);
    scoreboard.addSecondRoll(4);
    expect(scoreboard.totalFrameScore()).toEqual(7);
  });

  it('adds end of frame total to the game total', function(){
    scoreboard.addFirstRoll(5);
    scoreboard.addSecondRoll(4);
    scoreboard.recordFrameScore(scoreboard.totalFrameScore);
    expect(scoreboard.totalGameScore()).toEqual(9);
  });



});
