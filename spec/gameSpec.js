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
    rollMany(1, 20);
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
    expect(game.strikeMessage()).toEqual("TAKE A BOW its a STRIKE!");
  });

  it("can roll a Perfect Game", function() {
    rollMany(10, 21);
    expect(game.score()).toEqual(300);
  });

  it("allows maximum rolls of 21 ", function() {
    rollMany(1, 21);
    expect(game.rolls.length).toEqual(21);
    expect(game.endGameMessage()).toEqual("Congratulations! Game ended. Start a new game");
  });

  it("can score the 10 frames", function() {
    rollMany(6,8);
    rollMany(0,8);
    game.roll(8);
    game.roll(0);
    game.roll(1);
    game.roll(5);
    console.log(game.score());
    expect(game.score()).toEqual(62);
  });

  it("can score a spare in 10th frame", function() {
    rollMany(4,6);
    rollMany(0,6);
    rollMany(2,3);
    rollMany(3,3);
    game.roll(1);
    game.roll(9);
    game.roll(7);
    expect(game.score()).toEqual(56);
  });

  it("can score a strike in 10th frame", function(){
    rollMany(7,6);
    rollMany(0,6);
    rollMany(8,3);
    rollMany(3,3);
    game.roll(0);
    game.roll(10);
    game.roll(7);
    expect(game.score()).toEqual(92);
  });

  var rollMany = function(pins, rolls) {
    for( var i = 0; i<rolls; i++ ) {
      game.roll(pins);
    }
  };

});
