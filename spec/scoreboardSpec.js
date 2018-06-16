'use strict';

describe ('Scoreboard', function(){

  var scoreboard;

  beforeEach(function() {
    scoreboard = new Scoreboard;
  });

  it('start the frame at 0 points', function(){
    expect(scoreboard.getCurrentFrameScore()).toEqual(0);
  });

  it('adds the first roll to the current frame score', function(){
    scoreboard.addFirstRoll(8);
    expect(scoreboard.getCurrentFrameScore()).toEqual(8);
  });

  it('adds the second roll to the current frame score', function(){
    scoreboard.addSecondRoll(1);
    expect(scoreboard.getCurrentFrameScore()).toEqual(1);
  });
});
