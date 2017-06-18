'use strict';

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('throws an error if frame total is above 10', function () {
    expect(function() {game.addFrame(4,7)}).toThrow('Maximum frame score is 10');
  });

  describe("score calculation", function() {
    it('can calculate score before game finishes', function() {
      game.addFrame(10);
      game.addFrame(4,3);
      expect(game.score(2)).toEqual(24);
    });
    
    it('can handle gutter game', function() {
      rollFrames(0,0,10);
      expect(game.score(10)).toEqual(0);
    });

    it('can handle a perfect game', function() {
      rollFrames(10,0,9);
      game.addFinalFrame(10,10,10);
      expect(game.score(10)).toEqual(300);
    });

    it('can handle normal frames', function() {
      rollFrames(2,3,10);
      expect(game.score(10)).toEqual(50);
    });

    it('can handle a spare', function() {
      game.addFrame(4,6);
      game.addFrame(8,1);
      rollFrames(0,0,8);
      expect(game.score(10)).toEqual(27);
    });

    describe("strike functionality", function() {
      it('can handle a strike', function() {
        game.addFrame(10);
        game.addFrame(4,3);
        rollFrames(0,0,8);
        expect(game.score(10)).toEqual(24);
      });

      it('can handle 2 strikes in a row', function () {
        game.addFrame(10);
        game.addFrame(10);
        game.addFrame(4,0);
        expect(game.score(3)).toEqual(42);
      });

      it('can handle multiple strikes in a row', function () {
        rollFrames(10,0,3);
        game.addFrame(5,2);
        expect(game.score(4)).toEqual(79);
      });
    });

  });

  describe("calculates score correctly if 9th frame is", function() {
    it('a spare', function () {
      rollFrames(0,0,8);
      game.addFrame(5,5);
      game.addFinalFrame(10,5,5);
      expect(game.score(10)).toEqual(40);
    });

    it('a strike', function () {
      rollFrames(0,0,8);
      game.addFrame(10);
      game.addFinalFrame(10,5,5);
      expect(game.score(10)).toEqual(45);
    });
  });

  describe('calculates score correctly if final frame is', function() {
    it('a spare and normal roll', function () {
      rollFrames(0,0,9);
      game.addFinalFrame(5,5,4);
      expect(game.score(10)).toEqual(14);
    });

    it('a strike and a spare', function () {
      rollFrames(0,0,9);
      game.addFinalFrame(10,5,5);
      expect(game.score(10)).toEqual(20);
    });

    it('two strikes and a normal roll', function () {
      rollFrames(0,0,9);
      game.addFinalFrame(10,10,5);
      expect(game.score(10)).toEqual(25);
    });
  });

  function rollFrames(firstRoll, secondRoll, frames) {
    for(var i = 0;i < frames; i++) {
      game.addFrame(firstRoll, secondRoll);
    };
  };


});
