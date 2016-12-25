'use strict';

describe ("Scoreboard", function() {
  var scoreboard;
  var game;

  beforeEach(function(){
    scoreboard = new Scoreboard();
    game = jasmine.createSpy("Game");
  });

  it("Should initialize with an empty scores array", function(){
    expect(scoreboard.scores).toEqual([]);
  });

  it("should initialize with an empty totalScores array", function(){
    expect(scoreboard.totalScores).toEqual([]);
  });

  it("should place the first roll score result into the scores array", function(){
    scoreboard.scoreFirstRoll(4);
    expect(scoreboard.scores).toContain(4);
  });

  it("should return 'X' when a strike is scored", function(){
    expect(scoreboard.scoreFirstRoll(10)).toEqual('X');
  });

  it("should place the second roll score result into the scores array", function(){
    scoreboard.scoreSecondRoll(3);
    expect(scoreboard.scores).toContain(3);
  });

  it("should place the bonus third roll score into the scores array", function(){
    scoreboard.scoreThirdRoll(5);
    expect(scoreboard.scores).toContain(5);
  });

  it("should return the calculation of two consecutive throws", function(){
    scoreboard.scoreFirstRoll(4);
    scoreboard.scoreSecondRoll(3);
    expect(scoreboard.calculateScores()).toEqual(7);
  });

  it("should place the calculated score into the totalScores array", function(){
    scoreboard.scoreFirstRoll(5);
    scoreboard.scoreSecondRoll(1);
    scoreboard.calculateScores();
    expect(scoreboard.totalScores).toContain(6);
  });

  it("should return of a calculated score of a strike and the next two consecutive throws", function(){
  scoreboard.scoreFirstRoll(10);
  scoreboard.scoreFirstRoll(5);
  scoreboard.scoreSecondRoll(1);
  expect(scoreboard.aStrike()).toEqual(16);
});

  it("should place the total scores of three consecutive throws (first a strike) to totalScores", function(){
    scoreboard.scoreFirstRoll(10);
    console.log(scoreboard.scores)
    scoreboard.scoreFirstRoll(5);
    scoreboard.scoreSecondRoll(1);
    console.log(scoreboard.scores)
    scoreboard.calculateScores();
    console.log(scoreboard.scores)
    console.log(scoreboard.totalScores)
    console.log(scoreboard.aStrike())
    expect(scoreboard.totalScores).toEqual([16, 6])
  });


});
