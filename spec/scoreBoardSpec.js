'use strict';

describe ("Scoreboard", function() {
  var scoreboard;


  beforeEach(function(){
    scoreboard = new Scoreboard();
  });

  it("Should initialize with an empty scores array", function(){
    expect(scoreboard.scores).toEqual([]);
  });

  it("should initialize with an empty totalScores array", function(){
    expect(scoreboard.totalScores).toEqual([]);
  });

  it("should put the score result into the scores array", function(){
    scoreboard.scoreFirstRoll(4);
    expect(scoreboard.scores).toContain(4)
  });

});
