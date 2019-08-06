'use strict';

describe('Game', function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = jasmine.createSpyObj('frame', ['frameUp', 'totalScore']);
  });

  it('rolls a gutter game', function(){
    for(var i = 0; i < 10; i++){
      game.shot(0, 0)
    }
    expect(game.score()).toBe(0);
  });

  it('rolls a game of all ones', function(){
    for(var i = 0; i < 10; i++){
      game.shot(1, 1)
    }
    expect(game.score()).toBe(20);
  })

  it('handles a spare', function(){
      game.shot(3, 7)
      game.shot(5, 0)
      for(var i = 0; i < 17; i++){
        game.shot(0, 0)
      }
      expect(game.score()).toBe(20)
  })

  it('handles a strike', function(){
    game.shot(10)
    game.shot(2, 2)
    for(var i = 0; i < 8; i++){
      game.shot(0, 0)
    }
      expect(game.score()).toBe(18)
  })

  it('rolls a game of all strikes', function(){
    for(var i = 0; i < 12; i++){
      game.shot(10)
    }
    expect(game.score()).toBe(300);
  })

  it('calculates a frame score', function(){
    game.shot(3, 5)
    game.shot(4, 2)
    game.shot(1, 1)
    game.score()
    expect(game.getFrameScore(1)).toBe(8);
  })

  it('correctly calculates a frame with strike', function(){
    game.shot(10)
    game.shot(2, 4)
    game.score()
    expect(game.getFrameScore(1)).toBe(16)
  })

});
