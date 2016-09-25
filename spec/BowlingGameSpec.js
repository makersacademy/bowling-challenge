/* jshint -W117 */

describe('BowlingGame', function() { 'use strict';

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  function bowlFrames(n, frame) {
    for(var i = 0; i < n; i++) {
      game.roll(frame);
    }
  }

  describe('scoring a game', function() {

    it('can score a gutter game', function() {
      bowlFrames(10, [0,0])
      expect(game.score()).toEqual(0);
    })

    it('can score a game with two regular frames', function() {
      bowlFrames(1, [1,2])
      bowlFrames(1, [3,4])
      expect(game.score()).toEqual(10);
    })

    it('can score a game with a spare frame', function() {
      bowlFrames(1, [5,5])
      bowlFrames(1, [1,2])
      expect(game.score()).toEqual(14);
    })

    it('can score a game with a strike frame', function() {
      bowlFrames(1, [10,0])
      bowlFrames(1, [1,2])
      expect(game.score()).toEqual(16);
    })

    it('can score a game with a double strike', function() {
      bowlFrames(2, [10,0])
      bowlFrames(1, [1,2])
      expect(game.score()).toEqual(37);
    })

    it('can score a game with a triple strike', function() {
      bowlFrames(3, [10,0])
      bowlFrames(1, [1,2])
      expect(game.score()).toEqual(67);
    })

    it('can score a game with all ones', function() {
      bowlFrames(10, [1,1])
      expect(game.score()).toEqual(20);
    })
  });

  describe('guarding against incorrect/invalid games', function() {

    it('knows when it has finished', function() {
      bowlFrames(10, [1,1])
      expect(game.isOver()).toEqual(true);
    })

    it('cannot roll once game has finished', function() {
      bowlFrames(10, [1,1]);
      expect(function(){game.roll([1,1]);}).toThrowError('No frames remaining');
    })

    it('does not accept an invalid roll', function() {
      expect(function(){game.roll([5,6]);}).toThrowError('Invalid roll');
    })
  });
});
