'use strict';

describe('Game', function() {
  var frame;
  var game;
  var pins_standing;

  beforeEach(function() {
    frame = new Frame(pins_standing);
    game = new Game();
    pins_standing = new Pin();
    game.start();
  });

it('should contain 10 frames in a new game', function() {
  expect(game.frames.length).toEqual(10);
});

it('starts with a total score of 0', function(){
  expect(game.totalScore.sum()).toEqual(0);
});

it('adds the scores of two bowl in a frame', function(){
  game.frames[0].bowl(1);
  game.frames[0].bowl(4);
  game.pushTotalForFrame();
  expect(game.totalScore[0]).toEqual(5);
});

it('adds the scores of many frames for a player', function(){
  game.frames[0].bowl(1);
  game.frames[0].bowl(4);
  game.frames[3].bowl(1);
  game.frames[3].bowl(4);
  game.frames[6].bowl(2);
  game.frames[6].bowl(2);
  game.pushTotalForFrame();
  expect(game.totalScore.sum()).toEqual(14);
});

it('keeps track of frame scores bowls', function(){
  game.frames[0].bowl(1);
  game.frames[0].bowl(4);
  game.frames[3].bowl(1);
  game.frames[3].bowl(4);
  game.frames[6].bowl(2);
  game.frames[6].bowl(2);
  game.pushTotalForFrame();
  expect(game.totalScore).toEqual([5,0,0,5,0,0,4,0,0,0]);
});

it('knows which frame it is in', function(){
  game.frames[0].bowl(1);
  game.frames[0].bowl(4);
  game.pushTotalForFrame();
  expect(game.frameNumber).toEqual(2)
});


it('knows which frame it is in', function(){
  game.pushTotalForFrame();
  expect(game.frameNumber).toEqual(1)
});

// it('player cannot knock more than 10 pins down in a bowl', function(){
// //this might have to be moved to the frame class
//   expect(function(){game.frames[0].bowl(11)})
// });
});
