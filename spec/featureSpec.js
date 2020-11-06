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

  it('can score a gutter game', function(){
    for (var i = 0; i < 20; i ++){
      game.bowl(0);
    }
    expect(game.score()).toEqual(0);
  })

  it('can score a game of all 2s', function(){
    for (var i = 0; i < 20; i ++){
      game.bowl(2);
    }
    expect(game.score()).toEqual(40);
  })

  it('can score a spare followed by a 2', function(){
    for (var i = 0; i < 2; i ++){
      game.bowl(5);
    }
    game.bowl(2);
    for (var i = 0; i < 17; i ++){
      game.bowl(0);
    }
    expect(game.score()).toEqual(14);
  })

  it('can score a strike followed by a double 2', function(){
    game.bowl(10)
    for (var i = 0; i < 2; i ++){
      game.bowl(2);
    }
    for (var i = 0; i < 16; i ++){
      game.bowl(0);
    }
    expect(game.score()).toEqual(18);
  })
});