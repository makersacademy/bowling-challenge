'use strict';

describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });


  it("A gutter game has a zero score", function(){
    for (var i = 0; i < 20; i += 1 ) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it("All ones scores 20", function(){
    for (var i = 0; i < 20; i += 1 ) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });
});

