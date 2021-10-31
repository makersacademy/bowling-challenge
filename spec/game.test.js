var Game = require("../docs/game");
var Frame = require("../docs/frame");

describe("Game", function() {

  let game = new Game();
  
  it("adds a completed frame to the frames array", function(){
    game.enterFrame(1,2)
    expect(game.getFrames()).toEqual([[1,2]]);
  })

});
