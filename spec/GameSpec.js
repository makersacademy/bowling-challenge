'use strict';

describe('Game', function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  it('starts with an empty array', function(){
    expect(game.frames).toEqual([]);
  });

  describe('._addFrame', function(){
    it('adds the frame to the frames array', function(){
      game._addFrame(frame)
      expect(game.frames).toContain(frame)
    })
  })

  describe('.roll', function(){
    it('creates a new frame with parameters for each roll', function(){
      game.roll(6, 3)
      expect(game.frames[0].roll_one).toEqual(6)
    });
  });

// without bonuses
  describe('.calculateScore', function(){
    it('returns the total game score', function(){
      game.roll(5, 4)
      game.roll(9, 1)
      expect(game.calculateScore()).toEqual(19)
    });
  });

});
