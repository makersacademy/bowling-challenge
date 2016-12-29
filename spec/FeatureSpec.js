/*jslint node: true */
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
    expect(game.getScore()).toEqual(0);
  })

  it("should calculate the score for a simple game with no strikes/spares", function() {
    rollMany(1,20);
    expect(game.getScore()).toEqual(20);
  })

  it("should calculate the score for a game with a spare", function() {
    rollMany(5,2);
    game.roll(2);
    rollMany(0,17);
    expect(game.getScore()).toEqual(14);
  })

  it("should calculate the score for a game with a strike", function() {
    game.roll(10);
    game.roll(1);
    game.roll(2);
    rollMany(1,16);
    expect(game.getScore()).toEqual(32);
  })

  it('should calculate the score for a perfect game', function() {
    rollMany(10,12);
    expect(game.getScore()).toEqual(300);
  })

  it('should calculate a game with a spare in the last game', function() {
    rollMany(0,18);
    rollMany(5,3);
    expect(game.getScore()).toEqual(15);
  })

  it('should not include a frame in the total score until all points have been received', function() {
    game.roll(10);
    expect(game.getScore(1)).toEqual(null);
  })

  it('should include a frame in the total score once all points have been received', function() {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game.getScore(2)).toEqual(14);
  })




});
