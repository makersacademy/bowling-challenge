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
})
});
