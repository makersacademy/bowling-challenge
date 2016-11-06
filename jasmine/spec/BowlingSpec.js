"use strict";

describe("Game", function () {
  var game;

  beforeEach( function() {
    game = new Game();
  });

it("has 10 frames or 20 rolls typically", function () {
  for (var i = 0; i < 20; i++) { game.bowl(4);}
   expect(function () { game.bowl(4) }).toThrow("Game has ended");
});

it("records score for each roll", function () {
  game.bowl(4);
  game.calScore();
  expect(game.roll).toEqual([4]);
});

it("knows the number of rolls left for each game", function () {
  game.bowl(4);
  expect(game._rollsLeft).toEqual(19);
});

it("has 10 pins per frame", function () {
  game.bowl(4);
  expect(game._pins).toEqual(6);
});

it("updates score for an open frame", function () {
  for (var i = 0; i < 20; i++) { game.bowl(4); }
  game.calScore();
  expect(game.score).toEqual(80);
});


it("add bonus when strike", function() {
  game.bowl(10);
  for (var i = 0; i < 14; i++) { game.bowl(4); }
  game.calScore();
  expect(game.score).toEqual(74);
});

it("add bonus when double strike", function() {
  game.bowl(10);
  game.bowl(10);
  for (var i = 0; i < 16; i++) { game.bowl(4); }
  game.calScore();
  expect(game.score).toEqual(106);
});

it("add bonus when spare", function() {
  game.bowl(9);
  game.bowl(1);
  for (var i = 0; i < 14; i++) { game.bowl(4); }
  game.calScore();
  expect(game.score).toEqual(70);
});

it("on the tenth frame, it there is no strike or spare, total score are sum and game is terminated at the 20th roll", function () {
  for (var i = 0; i < 20; i++) { game.bowl(4); }
  game.calScore();
  expect(game.score).toEqual(80);
});

it("on the tenth frame, if user strike, user gets to roll one extra time", function () {
  for (var i = 0; i < 18; i++) { game.bowl(4); }
  game.bowl(10);
  expect(game._rollsLeft).toEqual(2);
});

it("on the tenth frame, if user has spare, user gets to roll one extra time", function () {
  for (var i = 0; i < 18; i++) { game.bowl(4); }
  game.bowl(2);
  game.bowl(8);
  expect(game._rollsLeft).toEqual(1);
});

it("calculate a gutter game", function () {
  for (var i = 0; i < 20; i++) { game.bowl(0); }
  game.calScore();
  expect(game.score).toEqual(0);
});

it("calculate a perfect game", function () {
  for (var i = 0; i < 12; i++) { game.bowl(10); }
  game.calScore();
  game.bonusRoll();
  expect(game.score).toEqual(300);
});


});
