'use strict';

describe ('Game', function () {
var game;

beforeEach(function() {
  game = new Game();
});

it ('starts with the score 0', function() {
  expect(game.currentScore).toEqual(0);
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

it ('adds up all spares accurately', function() {
  for (var i = 0; i < 21; i++) {
    game.roll(5)
  };
  expect(game.score()).toEqual(150);
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

it ('can check the score after only one frame (no strikes or spares)', function() {
  game.roll(4);
  game.roll(2);
  expect(game.currentScore).toEqual(6);
})

it ('can check the current score if a strike or spare is scored', function () {
  game.roll(10);
  game.roll(7);
  game.roll(1);
  expect(game.currentScore).toEqual(26);
});


});
