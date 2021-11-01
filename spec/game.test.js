var Game = require("../docs/game");
var Frame = require("../docs/frame");

describe("Game", function() {
  
  it("adds a completed frame to the frames array", function(){
    var game = new Game();
    game.enterFrame(1,2);
    expect(game.getFrames()).toEqual([[1,2]]);
  });

  it("adds the total of the rolls in a frame to the rollsTotal array", function(){
    var game = new Game();
    game.enterFrame(1,2);
    expect(game.getRollsTotals()).toEqual([3]);
  });

  it("adds the Strike bonus to the bonuses array", function(){
    var game = new Game();
    game.enterFrame(10,0);
    game.enterFrame(1,2);
    expect(game.getBonuses()).toEqual([3,0,0,0,0,0,0,0,0,0,0,0]);
  });

  it("adds the Spare bonus to the bonuses array", function(){
    var game = new Game();
    game.enterFrame(5,0);
    game.enterFrame(5,5);
    game.enterFrame(1,2);
    expect(game.getBonuses()).toEqual([0,1,0,0,0,0,0,0,0,0,0,0]);
  });






});
