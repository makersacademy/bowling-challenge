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
    game.roll(3)
  };
  expect(game.score()).toEqual(60);
});

it ('can roll a spare', function() {
  game.roll(5);
  game.roll(5);
  game.roll(7);
  for (var i = 0; i < 17; i++) {
    game.roll(0)
  };
  expect(game.score()).toEqual(24);
})

it ('can roll a strike', function() {
  game.roll(10);
  game.roll(7);
  game.roll(1);
  for (var i = 0; i < 16; i++) {
    game.roll(0)
  };
  expect(game.score()).toEqual(26);
});

it ('can roll 3 strikes in the last frame', function() {
  for (var i = 0; i < 13; i++) {
    game.roll(10)
  };
  expect(game.score()).toEqual(300);
})


});
