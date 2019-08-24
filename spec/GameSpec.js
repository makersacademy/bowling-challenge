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
    for(var i = 0; i < 20; i++){
      game.shot(1)
    }
    expect(game.score()).toBe(20);
  })

  it('handles a spare', function(){
      game.shot(3)
      game.shot(7)
      game.shot(5)
      for(var i = 0; i < 16; i++){
        game.shot(0)
      }
      expect(game.score()).toBe(20)
  })

  it('handles a strike', function(){
    game.shot(10)
    game.shot(2)
    game.shot(2)
    for(var i = 0; i < 16; i++){
      game.shot(0)
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
    game.shot(3)
    game.shot(5)
    game.shot(4)
    game.shot(2)
    game.shot(1)
    game.shot(1)

    game.score()
    expect(game.getFrameScore(1)).toBe(8);
  })

  it('correctly calculates a frame with strike', function(){
    game.shot(10)
    game.shot(2)
    game.shot(4)

    game.score()
    expect(game.getFrameScore(1)).toBe(16)
  })

  it('retrieves the score from an individual score', function(){
    game.shot(3)
    game.shot(5)
    game.shot(4)
    game.shot(2)
    game.score()

    expect(game.throwScore(1)).toBe(3)
  })

  it('retrieves the score from the third frame', function(){
    game.shot(3)
    game.shot(6)
    game.shot(4)
    game.shot(2)
    game.shot(5)
    game.shot(3)
    game.shot(6)
    game.shot(1)
    game.score()
    console.log(game.getFrameScore(1))
    console.log(game.getFrameScore(3))
    console.log(game)

    expect(game.getFrameScore(3)).toBe(8)
  })

  it('allows a user to play more than one game', function(){
    for(var i = 0; i < 12; i++){
      game.shot(10)
    }
    expect(game.score()).toBe(300)
    game.playAgain()
    for(var i = 0; i < 20; i++){
      game.shot(1)
    }
    expect(game.score()).toBe(20)
  })

});
