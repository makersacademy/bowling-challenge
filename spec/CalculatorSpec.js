'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  it ("game starts with 0 points", function(){
    expect(game.calculateScore()).toEqual(0);
  });

  it ("20 gutter balls return 0 points", function(){
    for(var i = 0; i < 20; i ++){
      game.addFrame(0,0);
    }
    expect(game.calculateScore()).toEqual(0);
  });
});
