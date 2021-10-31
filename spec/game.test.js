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


});
