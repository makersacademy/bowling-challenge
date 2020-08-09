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
    expect(game.currentFrame()).toEqual(2)
  });
  it('limits to 10 frames', function() {
    for ( var i = 0; i < 20; i++) {
      game.roll(0)
    }
    expect(function() { game.roll(0) }).toThrow('Game over')
  });
  it('ends the frame if a strike is bowled', function() {
    game.roll(10)
    expect(game.currentFrame()).toEqual(2)
  })
//  it('calculates the bonus for a spare', function() {
//    game.roll(9)
//    game.roll(1)
//    game.roll(5)
//    game.roll(3)
//    expect(game.score).toEqual(23)
//  })
});
