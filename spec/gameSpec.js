'use strict';
describe('Game', function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });
  it('has a score of 0', function() {
    expect(game.score).toEqual(0)
  });
  it('keeps score of the game', function() {
    game.roll(4)
    expect(game.score).toEqual(4)
  });
  it('adds multiple rolls together', function() {
    game.roll(4)
    game.roll(3)
    game.roll(6)
    game.roll(2)
    expect(game.score).toEqual(15)
  });
  it('keeps track of the frame', function() {
    game.roll(4)
    game.roll(3)
    game.roll(6)
    expect(game.whichFrame()).toEqual(2)
  });
  it('limits to 10 frames', function() {
    for ( var i = 0; i < 10; i++) {
      game.roll(0)
    }
    expect(function() {game.roll(0) }).toThrow('Game over')
  })
});
