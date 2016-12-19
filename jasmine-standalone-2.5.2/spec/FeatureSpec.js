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

  it("should calculate the score for a simple game with a spare", function() {
    rollMany(5,3);
    rollMany(0,17);
    expect(game.calculateScore()).toEqual(20);
  })


});
