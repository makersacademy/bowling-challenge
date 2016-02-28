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
    for(var i = 0; i < 10; i ++){
      game.addFrame(0,0);
    }
    expect(game.calculateScore()).toEqual(0);
  });

  it ("More than 10 frames returns an error", function(){
    for(var i = 0; i < 10; i ++){
      game.addFrame(0,0);
    }
    expect(function() {game.addFrame(0,0)}).toThrowError(TypeError, "Can't add over ten frames");
  });

  it ("calculates score correctly without strikes or spares", function(){
    for(var i = 0; i < 5; i ++){
      game.addFrame(1,6);
      game.addFrame(4,3);
    }
    expect(game.calculateScore()).toEqual(70);
  });
});
