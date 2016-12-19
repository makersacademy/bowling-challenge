'use strict';

describe('Feature Test', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });


  function rollMany (pins, times) {
    for(var i = 0; i < times; i++) {
      game.roll(pins);
    }
  }

  it("should give a score of 0 for a gutter game", function() {
    rollMany(0,20);
    expect(game.calculateScore()).toEqual(0);
  })

  it("should calculate the score for a simple game with no strikes/spares", function() {
    rollMany(1,20);
    expect(game.calculateScore()).toEqual(20);
  })

  it("should calculate the score for a game with a spare", function() {
    rollMany(5,2);
    game.roll(2);
    rollMany(0,17);
    expect(game.calculateScore()).toEqual(14);
  })

  it("should calculate the score for a game with a strike", function() {
    game.roll(10);
    game.roll(1);
    game.roll(2);
    rollMany(1,16);
    expect(game.calculateScore()).toEqual(32);
  })

  it('should calculate the score for a perfect game', function() {
    rollMany(10,12);
    expect(game.calculateScore()).toEqual(300);
  })

  it('should calculate a game with a spare in the last game', function() {
    rollMany(0,18);
    rollMany(5,3);
    expect(game.calculateScore()).toEqual(15);
  })

  it('should only include a frame in the total score once all bonus points have been received', function() {
    game.roll(10);
    game.roll(2);
    expect(game.calculateScore()).toEqual(0);
  })


});
