"use strict";

describe("Game", function () {
  var game;

  beforeEach( function() {
    game = new Game();
  });

it("has 10 frames or 20 rolls typically", function () {
   expect(game.rollsLeft).toEqual(20);
   // expect 11th frame to throw error / message
});

it("records score for each roll", function () {
  game.bowl(4);
  expect(game.roll).toEqual([4]);
});

it("knows the number of rolls left for each game", function () {
  game.bowl(4);
  expect(game.rollsLeft).toEqual(19);
});

it("has 10 pins per frame", function () {
  game.bowl(4);
  expect(game.pins).toEqual(6);
});

it("updates score after a frame", function () {
  game.bowl(4);
  game.bowl(3);
  expect(game.score).toEqual(7);
});

it("updates score without bonus", function () {
  game.bowl(4);
  game.bowl(5);
  game.bowl(3);
  game.bowl(3);
  expect(game.score).toEqual(15);
});

it("add bonus when strike", function() {
  game.bowl(10);
  game.bowl(4);
  game.bowl(4);
  expect(game.score).toEqual(18);
});

it("add bonus when spare", function() {
  game.bowl(9);
  game.bowl(1);
  game.bowl(4);
  game.bowl(2);
  expect(game.score).toEqual(14);
});

//add tenth frame 

});
