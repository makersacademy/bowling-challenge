'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  it("makes a new frame when you create a new game", function() {
    expect(game.currentFrame).toEqual(new Frame(1))
  });

  it("can create a new id with a different id based on how many times it has been called", function() {
    expect(game.currentFrame).toEqual(new Frame(1))
    game.newFrame()
    expect(game.currentFrame).toEqual(new Frame(2))
    game.newFrame()
    expect(game.currentFrame).toEqual(new Frame(3))
    game.newFrame()
    game.newFrame()
    game.newFrame()
    expect(game.currentFrame).toEqual(new Frame(6))
  });

  it("sets the score to 0 when a new game is created", function() {
    expect(game.score).toEqual(0)
  });

  it("increases the score by the total from the frame", function() {
    game.addBowl(5)
    game.addBowl(4)
    expect(game.score).toEqual(9)
  });

  it("increases the score by 10 if the player gets a strike", function() {
    game.addBowl(10)
    expect(game.score).toEqual(10)
  });

  it("doesn't increase the score if only one roll has been done from the frame", function() {
    game.addBowl(7)
    expect(game.score).toEqual(0)
  });

  it("increases the score by 30 if the player gets 2 strikes", function() {
    game.addBowl(10)
    expect(game.score).toEqual(10)
    game.addBowl(10)
    expect(game.score).toEqual(30)
  });
});
