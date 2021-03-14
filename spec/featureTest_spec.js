'use strict';

describe('bowling scoring program', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });
  
  it('scores a single-player game of bowling', function() {
    game.enterPins(10);

    expect(game.currentFrame).toEqual(2);
    expect(game.currentBowl).toEqual(1);
    expect(game.score).toEqual(0);

    game.enterPins(6);
    game.enterPins(4);

    expect(game.currentFrame).toEqual(3);
    expect(game.currentBowl).toEqual(1);
    expect(game.score).toEqual(20);

    game.enterPins(2);
    game.enterPins(5);

    expect(game.currentFrame).toEqual(4);
    expect(game.currentBowl).toEqual(1);
    expect(game.score).toEqual(39);

    game.enterPins(7);
    game.enterPins(3);

    expect(game.currentFrame).toEqual(5);
    expect(game.currentBowl).toEqual(1);
    expect(game.score).toEqual(39);

    game.enterPins(0);
    game.enterPins(0);

    expect(game.currentFrame).toEqual(6);
    expect(game.currentBowl).toEqual(1);
    expect(game.score).toEqual(49);

    game.enterPins(10);

    expect(game.currentFrame).toEqual(7);
    expect(game.currentBowl).toEqual(1);
    expect(game.score).toEqual(49);

    game.enterPins(10);

    expect(game.currentFrame).toEqual(8);
    expect(game.currentBowl).toEqual(1);
    expect(game.score).toEqual(49);

    game.enterPins(7);
    game.enterPins(3);

    expect(game.currentFrame).toEqual(9);
    expect(game.currentBowl).toEqual(1);
    expect(game.score).toEqual(96);

    game.enterPins(10);

    expect(game.currentFrame).toEqual(10);
    expect(game.currentBowl).toEqual(1);
    expect(game.score).toEqual(116);

    game.enterPins(10);
    game.enterPins(2);
    game.enterPins(4);

    expect(game.score).toEqual(154);
  });
});