// 'use strict';
//
// describe('Frame', function() {
//
//   var frame;
//
//   beforeEach(function() {
//     frame = new Frame();
//   });
//
//   describe('showRolls', function() {
//     it('returns the rolls for the frame', function() {
//       frame.recordRoll(6);
//       frame.recordRoll(2);
//       expect(frame.showRolls()).toEqual([6, 2]);
//     });
//   });
//
//   describe('recordRoll', function() {
//     it('can record a role', function() {
//       expect(frame.recordRoll(8)).toEqual(8);
//     });
//
//     it('adds roll to frame', function() {
//       frame.recordRoll(8);
//       expect(frame.showRolls()).toEqual([8]);
//     });
//
//     it('can add two rolls to frame', function() {
//       frame.recordRoll(8);
//       frame.recordRoll(1);
//       expect(frame.showRolls()).toEqual([8, 1]);
//     });
//
//     it('raises error if rolling three times', function() {
//       frame.recordRoll(6);
//       frame.recordRoll(1);
//       expect(function(){frame.recordRoll(1)}).toThrow("Limit of two rolls per frame");
//     });
//
//     it('raises error if number of pins is greater than 10', function() {
//       expect(function(){frame.recordRoll(12)}).toThrow("Maximum of 10 pins per roll");
//     });
//
//     it('raises error if total pins knocked down is more than 10', function() {
//       frame.recordRoll(9);
//       expect(function(){frame.recordRoll(2)}).toThrow("Limit of 10 pins knocked down per frame");
//     });
//   });
// });
