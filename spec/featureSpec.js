'use strict';

describe('Feature test', function(){
  let game;
  
  beforeEach(function(){
    game = new Game();
  })

  it('can score a single frame of 0s', function(){
    for (var i = 0; i < 2; i ++){
      game.bowl(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('can score a regular frame of 2s', function(){
    for (var i = 0; i < 2; i ++){
      game.bowl(2);
    }
    expect(game.score()).toEqual(4);
  })
});