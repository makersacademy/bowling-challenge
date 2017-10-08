"use strict";

describe("Game", function() {
  var game;

  beforeEach (function() {
    game = new Game();
});

  it("can roll a Gutter Game", function() {
    rollMany(0, 20);
    console.log(game.score);
    expect(game.score()).toEqual(0);
  });

  it("can roll All ones", function() {
    rollMany(1, 20)
    expect(game.score()).toEqual(20);
  });

  it("can roll a Spare", function() {
    game.roll(3);
    game.roll(7);
    game.roll(5);
    rollMany(0, 17);
    expect(game.score()).toEqual(20);

  });

  it("can roll a Strike", function() {
    game.roll(10);
    game.roll(5);
    game.roll(4);
    rollMany(0, 16);
    expect(game.score()).toEqual(28);

  });

  it("can roll a Perfect Game", function() {
    rollMany(10, 21);
    expect(game.score()).toEqual(300);
  });
  it("allows a maximum of 21 rolls a game", function() {
    rollMany(1, 21);
    expect(game.rolls.length).toEqual(21)
  });

  var rollMany = function(pins, rolls) {
    for( var i = 0; i<rolls; i++ ) {
      game.roll(pins);
    }
  };

});
