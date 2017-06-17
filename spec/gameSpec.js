'use strict';

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('throws an error if frame total is above 10', function () {
    expect(function() {game.addFrame(4,7)}).toThrow('Maximum frame score is 10');
  });


  it('can handle gutter game', function() {
    playGame(0,0,10);
    expect(game.score(10)).toEqual(0);
  });

  it('can handle normal frames', function() {
    playGame(2,3,10);
    expect(game.score(10)).toEqual(50);
  });

  it('can handle a spare', function() {
    game.addFrame(4,6);
    game.addFrame(8,1);
    playGame(0,0,8);
    expect(game.score(10)).toEqual(27);
  });

  it('can handle a strike', function() {
    game.addFrame(10);
    game.addFrame(4,3);
    playGame(0,0,8);
    expect(game.score(10)).toEqual(24);
  });

  it('can handle 2 strikes in a row', function () {
    game.addFrame(10);
    game.addFrame(10);
    game.addFrame(4,0);
    expect(game.score(3)).toEqual(42);
  });

  it('can calculate score before game finishes', function() {
    game.addFrame(10);
    game.addFrame(4,3);
    expect(game.score(2)).toEqual(24);
  });

  describe('calculates score correctly if final frame is', function() {
    it('a spare and normal roll', function () {
      playGame(0,0,9);
      game.addFinalFrame(5,5,4);
      expect(game.score(10)).toEqual(14);
    });

    it('a strike and a spare', function () {
      playGame(0,0,9);
      game.addFinalFrame(10,5,5);
      expect(game.score(10)).toEqual(20);
    });

    it('two strikes and a normal roll', function () {
      playGame(0,0,9);
      game.addFinalFrame(10,10,5);
      expect(game.score(10)).toEqual(25);
    });
  });

  function playGame(firstRoll, secondRoll, frames) {
    for(var i = 0;i < frames; i++) {
      game.addFrame(firstRoll, secondRoll);
    };
  };


});
