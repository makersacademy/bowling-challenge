'use strict';

describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player("Maria");
  });

  it("Accepts a name", function() {
    expect(player.name).toEqual("Maria");
  });

});

describe("Game", function() {
  var game;
  var player;

  beforeEach(function() {
    player = new Player("Maria");
    game = new Game(player);
  });

  it("Accepts a player", function() {
    expect(game.player.name).toEqual("Maria");
  });

  it("When initiated player had 10 frames to play", function() {
    expect(game.frames.length).toBe(10);
  });

  it("1st turn' score goes in the 1st frame", function() {
    game.roll(3);
    expect(game.frames[0][0]).toBe(3);
  });

  it("2nd turn' score goes in the 2nd part of the frame", function() {
    game.roll(3);
    game.roll(4);
    expect(game.frames[0][1]).toBe(4);
  });

  it("3rd turn' score goes in the 2nd frame", function() {
    game.roll(3);
    game.roll(4);
    game.roll(5);
    expect(game.frames[1][0]).toBe(5);
  });

  it("keeps track of score", function() {
    game.roll(3);
    game.roll(4);
    expect(game.score).toBe(7);
  });
  it("keeps track of 1 spare", function() {
    game.roll(5);
    game.roll(5);
    game.roll(1);
    game.roll(4);
    expect(game.score).toBe(16);
  });

  it("keeps track of 2 spares in a row", function() {
    game.roll(5);
    game.roll(5);
    game.roll(4);
    game.roll(6);
    game.roll(1);
    expect(game.score).toBe(25);
  });

  it("keeps track of turn when 1 strike", function() {
    game.roll(10);
    expect(game.turn).toBe(1);
  });

  it("keeps track of turn when 2 strike in row", function() {
    game.roll(10);
    game.roll(10);
    expect(game.turn).toBe(2);
  });

  it("keeps track of score when 1 strike", function() {
    game.roll(10);
    game.roll(2);
    game.roll(2);
    expect(game.score).toBe(18);
  });

  it("keeps track of score when 2 strikes in a row", function() {
    game.roll(10);
    game.roll(10);
    game.roll(2);
    game.roll(2);
    expect(game.score).toBe(40);
  });
});
