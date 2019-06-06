// var Game = require('../../src/Game');

describe("Game with no bonus points", function(){
  it("Rolls a non-10 score every frame", function(){
    game = new Game();
    for(let i=0; i<20; i++){
      game.recordScore(3);
    }
    expect(game.calculateTotal()).toEqual(60);
    expect(game.isComplete()).toEqual(true);
  });
});
