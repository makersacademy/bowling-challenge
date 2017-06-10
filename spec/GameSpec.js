'use strict';

describe ('Game', function () {
var game;

beforeEach(function() {
  game = new Game();
});

it ('starts with the score 0', function() {
  expect(game.score).toEqual(0);
});

it ('can increase the score depending on the roll', function() {
  game.roll(5)
  expect(game.score).toEqual(5);
});

it ('the score is classed as a X if a 10 is rolled', function() {
  game.roll(10)
  expect(game.score).toEqual('X');
});

it ('starts the second frame after 2 bowls', function() {
  game.roll(5)
  game.roll(4)
  expect(game.frame).toEqual(2);
});
});
