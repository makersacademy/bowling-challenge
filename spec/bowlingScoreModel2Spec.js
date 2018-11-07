// 'use strict';

// describe('BowlingScore', function() {

//   var bowlingScore;

//   beforeEach(function() {
//     bowlingScore = new BowlingScore();
//   });

//   it('score starts at 0', function() {
//     expect(bowlingScore.getCurrentScore()).toEqual(0);
//   });

//   it('holds a frame', function() {
//     expect(bowlingScore.frame1.getFrameNum()).toEqual(1);
//   });

//   it('can access updated frame score', function() {
//     expect(bowlingScore.frame1.getFrameScore()[0]).toEqual(0);
//     expect(bowlingScore.frame1.getFrameScore()[1]).toEqual(0);
//     expect(bowlingScore.frame1.getFrameScore()[2]).toEqual('');
//   });

//   it('can update score array', function() {
//     expect(bowlingScore.scoreArray.length).toEqual(2);
//   });

//   it('can update score', function() {
//     expect(bowlingScore.getCurrentScore()).toEqual(0);
//   });
// });



// describe('Frame', function() {

//   var frame;

//   beforeEach(function() {
//     frame = new Frame(1);
//   });

//   it('has a number', function() {
//     expect(frame.getFrameNum()).toEqual(1);
//   });

//   it('holds a roll', function() {
//     expect(frame.roll1.getRollScore()).toEqual(0)
//   });

//   it('will get a second roll, if the first is less than 10', function() {
//     expect(frame.roll2.getRollScore()).toEqual(0)
//   });

//   it('updates frame score', function() {
//     expect(frame.getFrameScore()[0]).toEqual(0);
//     expect(frame.getFrameScore()[1]).toEqual(0);
//     expect(frame.getFrameScore()[2]).toEqual('');
//   });
// });



// describe('Roll', function() {
  
//   var roll1;

//   beforeEach(function() {
//     roll1 = new Roll(3);
//   });

//   it('holds a score', function() {
//     expect(roll1.getRollScore()).toEqual(3);
//   });
// });