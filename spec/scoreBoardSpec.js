'use strict';

describe("Scoreboard", function(){
  var scoreboard;

  beforeEach(function(){
    scoreboard = new Scoreboard();

  });

  it("should intialize with an empty scores array", function(){
    expect(scoreboard.scores).toEqual([]);
  });

  it("should initialize with maximum score of 10", function(){
    expect(scoreboard.MAXSCORE).toEqual(10);
  });

  it("should initialize with an empty array for all scores", function(){
    expect(scoreboard.allScores).toEqual([]);
  });

  it("should return a calculation of the current score per throw set", function(){
    var currentScore = [3,4]
    scoreboard.calculateScore(currentScore);
    expect(scoreboard.scores).toContain(7);
  });

  it("should return an array of all individual scores obtained", function(){
    var currentScore = [3,4]
    scoreboard.calculateScore(currentScore);
    expect(scoreboard.allScores).toEqual([[3,4]]);
  });

  it("should return a calculation of the current score per throw set", function(){
    var currentScore = ["X"]
    scoreboard.calculateScore(currentScore);
    expect(scoreboard.scores).toContain('0X');
  });

  it("should return the relevant function according to the score - strike", function(){
  var currentScore = ["X"];
  scoreboard.calculateScore(currentScore);
  var currentScore = [3,3];
  scoreboard.calculateScore(currentScore);
  scoreboard.bonusPoints();
  expect(scoreboard.scores).toContain(16);
  });

  it("should return the relevant function according to the score - spare", function(){
   var currentScore = [5,5]
   scoreboard.calculateScore(currentScore);
   var currentScore = [3,6]
   scoreboard.calculateScore(currentScore);
   scoreboard.bonusPoints();
   expect(scoreboard.scores).toContain(13);
 });
});
