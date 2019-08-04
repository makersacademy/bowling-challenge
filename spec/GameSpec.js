'use strict';

describe('Game', function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = jasmine.createSpyObj('frame', ['frameUp', 'totalScore']);
  });

  it('rolls a gutter game', function(){
    for(var i = 0; i < 20; i++){
      game.shot(0)
    }
    expect(game.score()).toBe(0);
  });

  it('rolls a game of all ones', function(){
    for(var i = 0; i < 20; i++){
      game.shot(1)
    }
    expect(game.score()).toBe(20);
  })

  it('handles a spare', function(){
      game.shot(3)
      game.shot(7)
      game.shot(5)
      for(var i = 0; i < 17; i++){
        game.shot(0)
      }
      expect(game.score()).toBe(20)
  })

  it('handles a strike', function(){
    game.shot(10)
    game.shot(2)
    game.shot(2)
    for(var i = 0; i < 18; i++){
      game.shot(0)
    }
      expect(game.score()).toBe(18)
  })

  it('rolls a game of all strikes', function(){
    for(var i = 0; i < 16; i++){
      game.shot(10)
    }
    expect(game.score()).toBe(300);
  })

});
