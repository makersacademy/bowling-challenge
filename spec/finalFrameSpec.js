'use strict'


describe('Final frame behaviour', function() {
  var finalFrame;

  beforeEach(function() {
    finalFrame = new Finalframe();
  });

  // it('should have a constuctor variable of 10 pins as default', function() {
  //   expect(finalFrame.DEFAULT_PINS).toEqual(10);
  // });
//
//
//   it('should return the current number of pins left standing', function() {
//     finalFrame.rollOne(8);
//     expect(finalFrame.remainingPins()).toEqual(2);
//   });
//
//   it('should initialize with a constructor variable array to hold the scores', function() {
//     expect(finalFrame.results).toEqual([]);
//   });
//
//   it('should log the score of my first roll', function() {
//     finalFrame.rollOne(8);
//     expect(finalFrame.results.length).toEqual(1);
//     expect(finalFrame.results).toEqual([8]);
//   });
//
//
//   it('should log the score of my second roll', function() {
//     finalFrame.rollOne(8);
//     finalFrame.rollTwo(1);
//     expect(finalFrame.results.length).toEqual(2);
//     expect(finalFrame.results).toEqual([8,1]);
//   });
//
//
//   it('should log the score of my third roll', function() {
//     finalFrame.rollOne(8);
//     finalFrame.rollTwo(2);
//     finalFrame.rollThree(10);
//     expect(finalFrame.results.length).toEqual(3);
//     expect(finalFrame.results).toEqual([8,2,10]);
//   });
//
//
//   it('should give the total score of the frame with no strike', function() {
//     finalFrame.rollOne(8);
//     finalFrame.rollTwo(1);
//     expect(finalFrame.frameScore()).toEqual(9);
//   });
//
//   it('should give the total score of the frame with strikes included - so 3 shots', function() {
//     finalFrame.rollOne(8);
//     finalFrame.rollTwo(2);
//     finalFrame.rollThree(10);
//     expect(finalFrame.frameScore()).toEqual(20);
//   });
//
//   it('a gutter game results in only 2 shots played in the final frame', function() {
//     finalFrame.rollOne(0);
//     finalFrame.rollTwo(0);
//     expect(finalFrame.results.length).toEqual(2);
//     expect(finalFrame.results).toEqual([0,0]);
//     expect(finalFrame.frameScore()).toEqual(0);
//   });
});
