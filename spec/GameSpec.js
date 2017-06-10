'use strict';

describe ('Game', function () {
var game;

beforeEach(function() {
  game = new Game();
});

it ('starts with the score 0', function() {
  expect(game.score).toEqual(0);
});
});
