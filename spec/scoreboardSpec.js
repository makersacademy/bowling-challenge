'use strict';

describe ('Scoreboard', function(){

  var scoreboard;

  beforeEach(function() {
    scoreboard = new Scoreboard;
  });

  it('start the frame at 0 points', function(){
    expect(scoreboard.getCurrentFrameScore()).toEqual(0);
  });
});
