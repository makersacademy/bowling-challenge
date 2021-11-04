var Game = require("../docs/game");
var Frame = require("../docs/frame");

describe("Game", function() {

  // initial spare with pending bonus.
  let scorecard1 = [
    {Number: 1, roll1: 7, roll2: 3, rollsTotal: 10, bonus: 'pending', frameTotal: 10 }
  ];

  // full game with a couple of back to back bonuses.
  let scorecard2 = [
    {Number: 1, roll1: 5, roll2: 5, rollsTotal: 10, bonus: 4, frameTotal: 14 },
    {Number: 2, roll1: 4, roll2: 6, rollsTotal: 10, bonus: 5, frameTotal: 15 },
    {Number: 3, roll1: 5, roll2: 0, rollsTotal: 5, bonus: 0, frameTotal: 5 },
    {Number: 4, roll1: 10, roll2: 0, rollsTotal: 10, bonus: 10, frameTotal: 20 },
    {Number: 5, roll1: 10, roll2: 0, rollsTotal: 10, bonus: 7, frameTotal: 17 },
    {Number: 6, roll1: 3, roll2: 4, rollsTotal: 7, bonus: 0, frameTotal: 7 },
    {Number: 7, roll1: 7, roll2: 3, rollsTotal: 10, bonus: 10, frameTotal: 20 },
    {Number: 8, roll1: 10, roll2: 0, rollsTotal: 10, bonus: 10, frameTotal: 20 },
    {Number: 9, roll1: 2, roll2: 8, rollsTotal: 10, bonus: 2, frameTotal: 12 },
    {Number: 10, roll1: 2, roll2: 1, rollsTotal: 3, bonus: 0, frameTotal: 3 }
  ];

  it("returns the current scorecard partway through a game", function(){
    var game = new Game();
    game.enterFrame(7, 3);
    expect(game.getCurrentScorecard()).toEqual(scorecard1);
  });

  it("ammends frame bonus to pending if a bonus is due for the frame", function(){
    var game = new Game();
    game.enterFrame(7, 3);
    sc = game.getCurrentScorecard();
    expect(sc[0].bonus).toContain('pending');
  });

  it("adds a strike bonus to the scorecard after the next frame", function(){
    var game = new Game();
    game.enterFrame(10,0);
    game.enterFrame(1,2);
    game.decideBonus();
    sc = game.getCurrentScorecard();
    expect(sc[0].bonus).toEqual(3);
  });

  it("adds a spare bonus to the scorecard after the next frame", function(){
    var game = new Game();
    game.enterFrame(5,5);
    game.enterFrame(1,2);
    game.decideBonus();
    sc = game.getCurrentScorecard();
    expect(sc[0].bonus).toEqual(1);
  });

  it("calculates and adds frame totals to the scorecard after bonuses calculated", function(){
    var game = new Game();
    game.enterFrame(5,5);
    game.enterFrame(10,0);
    game.enterFrame(6,3);
    game.decideBonus();
    game.calcFrameTotal();
    sc = game.getCurrentScorecard();
    expect(sc[0].frameTotal).toEqual(20);
    expect(sc[1].frameTotal).toEqual(19);
    expect(sc[2].frameTotal).toEqual(9);
  });

  it("calculates the bonuses correctly for back to back strikes and spares", function(){
    var game = new Game();
    game.enterFrame(5,5);
    game.enterFrame(4,6);
    game.enterFrame(5,0);
    game.enterFrame(10,0);
    game.enterFrame(10,0);
    game.enterFrame(3,4);
    game.enterFrame(7,3);
    game.enterFrame(10,0);
    game.enterFrame(2,8);
    game.enterFrame(2,1);
    game.decideBonus();
    game.calcFrameTotal();
    expect(game.getCurrentScorecard()).toEqual(scorecard2);
  });

  it("calculates all scores correctly for a perfect game", function(){
    var game = new Game();
    game.enterFrame(10,0);
    game.enterFrame(10,0);
    game.enterFrame(10,0);
    game.enterFrame(10,0);
    game.enterFrame(10,0);
    game.enterFrame(10,0);
    game.enterFrame(10,0);
    game.enterFrame(10,0);
    game.enterFrame(10,0);
    game.enterFrame(9,0);
    game.decideBonus();
    game.calcFrameTotal();
    expect(game.calcGrandTotal()).toEqual(200);
  });

});
