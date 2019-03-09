'use strict';

describe('Game', function() {
  var frame;
  var game;
  var pins_standing;

  beforeEach(function() {
    frame = new Frame(pins_standing);
    game = new Game();
    pins_standing = new Pin();
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

it('adds the scores of many frames', function(){
  game.start();
  game.frames[0].bowl(1);
  game.frames[0].bowl(4);
  game.frames[3].bowl(1);
  game.frames[3].bowl(4);
  game.frames[6].bowl(2);
  game.frames[6].bowl(2);
  game.pushTotalForFrame();
  expect(game.totalScore.sum()).toEqual(14);
});

});
