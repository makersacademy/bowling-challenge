debugger;
'use strict';

describe('Game', function() {
  var game;
  var frame;
  var frames = [];

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  //
  // it('has a maximum of 10 frames', function() {
  //   for (var i=0; i<10; i++) {
  //     frame.playFixedFrame(4,3);
  //   }
  //   expect(frame.playFixedFrame(4,3)).toEqual("Sorry, there are only 10 frames per game!");
  // });

  // it('can add a frame', function() {
  //   // frame.playNextFrame();
  //   game.addFrame([3,6]);
  //   expect(game._frames).toEqual([[3,6]]);
  //   // expect(game._scores).toEqual([9]);
  // });

  // it('can calculate the current game score', function() {
  //   // frame.playNextFrame();
  //   game.addFrame([3,6]);
  //   game.addFrame([4,5]);
  //   game.addFrame([5,5]);
  //   expect(game._scores[2]).toEqual([28]);
  // });

  // it('can get the current score', function() {
  //   game.addFrame([3,6]);
  //   expect(game.currentScore()).toEqual(9);
  // });


  // describe('gutter game', function() {
  //
  //   it('has a total score of 0', function() {
  //     for (var i = 0; i < 10; i++) {
  //         game.addFrame([0,0]);
  //     }
  //     expect(game._calculateScore(10)).toEqual(0);
  //   });
  //
  // });
  //
  // describe('the perfect game', function() {
  //
  //   it('has a total score of 300', function() {
  //     for (var i = 0; i < 10; i++) {
  //         game.addFrame([10,0]);
  //     }
  //     expect(game._game._calculateScore(10)calculateScore(10)).toEqual(300);
  //   });
  //
  // });

});
