// var Game = require('../../src/Game');

describe("Gutter game", function(){
  it("Rolls a zero for every frame of the game", function(){
    game = new Game();
    for(let i=0; i<20; i++){
      game.recordScore(0);
    }
    expect(game.calculateTotal()).toEqual(0);
    expect(game.isComplete()).toEqual(true);
  });

  it("Rolls a zero for every frame and stops the game", function(){
    game = new Game();
    for(let i=0; i<20; i++){
      game.recordScore(0);
    }
    game.recordScore(5);
    expect(game.calculateTotal()).toEqual(0);
    expect(game.isComplete()).toEqual(true);
  });
});
