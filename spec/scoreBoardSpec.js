'use strict';

describe("Scoreboard", function(){
  var scoreboard;
  var game;

  beforeEach(function(){
    scoreboard = new Scoreboard();
    game = jasmine.createSpy('game');
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

  it("should initialize with an empty current score array", function() {
    expect(scoreboard.currentScore).toEqual([]);
  });

  it("should return the result of the first roll", function(){
    expect(scoreboard.scoreFirstRoll(4)).toEqual(4);
  });

  it("should return the result of the second roll", function(){
    expect(scoreboard.scoreSecondRoll(3)).toEqual(3);
  });

  it("should return the result for the third roll", function(){
    expect(scoreboard.scoreThirdRoll(5)).toEqual(5);
  });

  it("should return an array with the first current score", function() {
    scoreboard.scoreFirstRoll(4);
    expect(scoreboard.currentScore).toContain(4);
  });

  it("should return an array that contains the second score", function(){
    scoreboard.scoreSecondRoll(3);
    expect(scoreboard.currentScore).toContain(3)
  });

  it("should return an array of the first and second score", function(){
    scoreboard.scoreFirstRoll(4);
    scoreboard.scoreSecondRoll(3);
    expect(scoreboard.currentScore).toEqual([4,3])
  });

  it("should return a calculation of the current score per throw set", function(){
    scoreboard.currentScore = [4,3]
    scoreboard.calculateScore();
    expect(scoreboard.scores).toContain(7);
  });

//   it("should return an array of all individual scores obtained", function(){
//     game.currentScore = [3,4]
//     scoreboard.calculateScore(game.currentScore);
//     expect(scoreboard.allScores).toEqual([[3,4]]);
//   });
//
//   it("should return a calculation of the current score per throw set", function(){
//     game.currentScore = ["X"]
//     scoreboard.calculateScore(game.currentScore);
//     expect(scoreboard.scores).toContain('0X');
//   });
//
//   it("should return the relevant function according to the score - 2 strikes", function(){
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     expect(scoreboard.scores).toContain(20);
//   });
//
//   it("should return the relevant function according to the score - strike", function(){
//     game.currentScore = ["X"]
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal()
//     game.currentScore = [3,3]
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal()
//     expect(scoreboard.scores).toContain(16);
//   });
//
//   it("should return the relevant function according to the score - spare", function(){
//     game.currentScore = [5,5]
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal()
//     game.currentScore = [3,6]
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal()
//     expect(scoreboard.scores).toContain(13);
//   });
//
//   it("should return the relevant function according to the score - spare", function(){
//     game.currentScore = [5,5];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ['X'];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     expect(scoreboard.scores).toContain(20);
//   });
//
//   it("should return the total score if no stikes or spares were scored", function(){
//     game.currentScore = [5,2];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = [3,6];
//     scoreboard.calculateScore(game.currentScore);
//     expect(scoreboard.currentTotal()).toEqual(16);
//   });
//
//   it("should calculate current total", function() {
//     game.currentScore = [5,5]
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.bonusPoints();
//     game.currentScore = [3,6]
//     scoreboard.calculateScore(game.currentScore);
//     expect(scoreboard.currentTotal()).toEqual(22)
//   });
//
//   it("should return perfect score if total score is 300", function(){
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     expect(scoreboard.currentTotal()).toEqual('Perfect Game!')
//   });
//
//   it("should return gutter game if total score is zero", function() {
//     expect(scoreboard.currentTotal()).toEqual('Gutter Game!')
//   });
//
//   it("should count the frames completed", function() {
//     scoreboard.allScores = ([[1,3]]);
//     scoreboard.increaseFrame();
//     expect(scoreboard.frameCount).toEqual(1)
//   });
//
});
