'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();

  });


  describe('roll', function() {

    it('records the first roll\'s score on the score sheet', function() {
      frame.roll(9);
      expect(frame._scoreSheet).toEqual([9]);
    });

    it('records the second roll\'s score on the score sheet', function() {
      frame._scoreSheet = [3];
      frame.roll(7);
      expect(frame._scoreSheet).toEqual([3, 7]);
    });

  });


  describe('updateFrameAndRoll', function() {

    it('tracks which roll frame and roll is being played', function() {
      frame.roll(9);
      expect(frame._frameAndRoll).toEqual([1, 2]);
    });

  });


  describe('rollType', function() {

    it('knows records whether the roll is a strike', function() {
      frame.roll(10);
      expect(frame._wasStrike).toEqual(true);
    });

    it('knows whether the frame is a spare', function() {
      frame.roll(3);
      frame.roll(7);
      expect(frame._wasSpare).toEqual(true);
    });

  });

  describe('getTotalScore', function() {

    it('gets the total score at any point in the game (including strike and spare bonuses)', function() {
      frame.roll(10);
      frame.roll(7);
      frame.roll(2);
      frame.roll(1);
      frame.roll(9);
      frame.roll(3);
      expect(frame.getTotalScore()).toEqual(44);
    });

  });
});





//       frame._scoreSheet = [1]
//       expect(frame.getTotalScore()).toEqual(0);
//     });
//
// });

// it('Adds the frame\'s first roll to the total score', function() {
//   frame.roll(9);
//   expect(game.getTotalScore()).toEqual(9);
// });

//   it('Adds the frame\'s second roll to the total score', function() {
//     game._totalScore = 3;
//     game._frameAndRoll = [1, 2];
//     game.roll(7);
//     expect(game.getTotalScore()).toEqual(10);
//   });
//

// // it('adds the 10th frame\'s first roll to total score', function(){
// //   game._frameAndRoll = [10, 1];
// //   game.roll(7);
// //   expect(game.getTotalScore()).toEqual(7);
// // });
//
// });
