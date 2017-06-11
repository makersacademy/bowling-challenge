'use strict';

describe ('Game', function () {
var game;

beforeEach(function() {
  game = new Game();
});

it ('starts with the score 0', function() {
  for (var i = 0; i < 20; i++) {
    game.roll(0)
  };
  expect(game.score()).toEqual(0);
});

it ('can increase the score depending on the roll', function() {
  for (var i = 0; i < 20; i++) {
    game.roll(5)
  };
  expect(game.score()).toEqual(100);
});

// it ('can roll a spare', function() {
//   game.roll(5);
//   game.roll(5);
//   game.roll(7);
//   expect(game.score()).toEqual(24);
// })


});
