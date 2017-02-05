'use strict';

describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game()
  })

  it('adds a new frame to the game', function(){
    game.roll(2,2)
    expect(game.frames.length).toEqual(1)
  });

  it('returns a specific frame', function(){
    game.roll(2,2)
    expect(game.getRoll(1).rolls).toEqual([2,2])
  });

  it("has a maximum of 10 frames", function(){
    for (var i = 0; i < 10; i++) {
      game.roll(2,2)
    }
    expect(function(){game.roll(2,2)}).toThrow("Game finished")
  });

  describe('game outcome', function(){
    it('calculates the total game score', function(){
      for (var i = 0; i < 10; i++) {
        game.roll(2,2)
      }
        expect(game.totalScore()).toEqual(40)
    });

  });
});
