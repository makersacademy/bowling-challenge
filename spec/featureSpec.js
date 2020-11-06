'use strict';

describe('Feature test', function(){
  let game;
  
  beforeEach(function(){
    game = new Game();
  })

  it('can score a single frame of 0s', function(){
    game.bowl(0);
    game.bowl(0);
    expect(game.score()).toEqual(0);
  });
});