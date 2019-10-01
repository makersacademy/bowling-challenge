// var Game = require('../../src/Game');

describe("Perfect game", function(){
  it("Rolls a 10 for every frame of the game", function(){
    game = new Game();
    for(let i=0; i<21; i++){
      game.recordScore(10);
    }
    expect(game.calculateTotal()).toEqual(300);
    expect(game.isComplete()).toEqual(true);
  });
});
