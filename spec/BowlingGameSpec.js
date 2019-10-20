'use strict';

describe ('BowlingGame', function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('stores a bowl in the correct frame', function() {
    game.bowl(5);
    game.bowl(2);
    expect(game.allFrames[1]).toEqual([5, 2]);
  });

  it('moves onto the next frame after 2 bowls', function() {
    game.bowl(5);
    game.bowl(2);
    game.bowl(10);
    game.bowl(6);
    game.bowl(3);
    expect(game.currentFrame).toEqual(3);
  });

  it('adds a bonus roll if there is a spare', function() {
    game.bowl(5);
    game.bowl(5);
    expect(game.bonusRoll).toEqual(1);
  });

  it('adds 2 bonus rolls if there is a strike', function() {
    game.bowl(10);
    expect(game.bonusRoll).toEqual(2);
  });

  it('adds bonus points to previous frame if there is a spare', function() {
    game.bowl(5);
    game.bowl(5);
    game.bowl(3);
    game.bowl(1);
    expect(game.allFrames[1]).toEqual([5, 5, 3]);
    expect(game.allFrames[2]).toEqual([3, 1]);
  });

  it('adds bonus points to previous frame if there are 2 spares', function() {
    game.bowl(5);
    game.bowl(5);
    game.bowl(7);
    game.bowl(3);
    game.bowl(2);
    game.bowl(2);
    expect(game.allFrames[1]).toEqual([5, 5, 7]);
    expect(game.allFrames[2]).toEqual([7, 3, 2]);
  });

  it('adds bonus points to previous frame if there is a strike', function() {
    game.bowl(10);
    game.bowl(5);
    game.bowl(1);
    expect(game.allFrames[1]).toEqual([10, 5, 1]);
    expect(game.allFrames[2]).toEqual([5, 1]);
  });

});
