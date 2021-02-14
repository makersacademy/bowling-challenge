'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('initializes with an empty frames array', function() {
    expect(game.frames).toEqual([])
  });

  describe('#input_bowl, rolls 1-9', function() {
      it('returns pins with input_bowl method', function() {
        expect(game.input_bowl(2)).toBe(2);
      });

      it('creates a Frame and adds it to frames array', function() {
        game.input_bowl(2);
        expect(game.frames.length).toBe(1);
      });

      it('saves pins and adds to score', function() {
        game.input_bowl(2);
        game.input_bowl(7);
        game.calculateScore();
        expect(game.score).toBe(9);
      })

      it('knows when to initialize a new Frame', function() {
        game.input_bowl(2);
        game.input_bowl(7);
        expect(game.frames.length).toBe(1);
        game.input_bowl(7);
        expect(game.frames.length).toBe(2);
      })
  });
})
