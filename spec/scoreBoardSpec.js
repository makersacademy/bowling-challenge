'use strict';

describe("Scoreboard", function(){
  var scoreboard;

  beforeEach(function(){
    scoreboard = new Scoreboard();

  });

  it("should intialize with an empty scores array", function(){
    expect(scoreboard.scores).toEqual([]);
  });

  it("should return a calculation of the current score per throw set", function(){
    var currentScore = [3,4]
    scoreboard.calculateScore(currentScore);
    expect(scoreboard.scores).toContain(7);
  });

  it("should return a calculation of the current score per throw set", function(){
    var currentScore = ["X"]
    scoreboard.calculateScore(currentScore);
    expect(scoreboard.scores).toContain('0X');
  });

});
