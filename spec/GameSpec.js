'use strict';

describe('Game', function() {
  var frame;
  var game;
  var pin;

  beforeEach(function() {
    frame = new Frame();
    game = new Game();
    pin = new Pin();
  });

it('should contain 10 frames in a new game', function() {
  game.start();
  expect(game.frames.length).toEqual(10);
});

it('adds the scores of two bowl in a frame', function(){
  game.start();
  game.frames[0].bowl(1);
  game.frames[0].bowl(4);
  game.pushTotalForFrame();
  expect(game.totalScore[0]).toEqual(5);
});
});
