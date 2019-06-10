//
// describe('Frame',function() {
//   var frame;
//     });
//
//   beforeEach(function() {
//     frame = new Frame();
//   });
//
//     it('a new frame is active by default', function() {
//       expect(frame.isActive).toBeTruthy();
//     });
//
//     it('score for each frame starts at zero',function() {
//       expect(frame.points).toEqual(0);
//     });
//
//     it('has a maximum of two rolls', function() {
//       expect(frame.maxRolls).toEqual(2);
//     });
//
//     it('has 10 pins',function() {
//       expect(frame.pins).toEqual(10);
//     });
//
//   describe('#reset',function() {
//     it('resets to 10 pins after each frame',function() {
//       frame.reset();
//       expect(frame.points).toEqual(0);
//     });
//   });
//
//   describe('#enterRoll',function() {
//     it('records score from roll',function() {
//       frame.enterRoll(2);
//       expect(frame.rolls.length).toEqual(1);
//     });
//
//     it('ends the frame when the player has rolled twice',function() {
//       frame.enterRoll(2);
//       frame.enterRoll(4);
//       frame.enterRoll(3);
//       expect(frame.isActive).toBeFalsy();
//     });
//   });
//
//
//     describe('#isStrike',function() {
//       beforeEach(function() {
//         frame.isStrike();
//       });
//
//       it('ends the frame if the player rolls a strike',function() {
//         expect(frame.isActive).toEqual(false);
//       });
//
//       it('adds ten points to the score',function() {
//         expect(frame.points).toEqual(10);
//       });
//     });
//
//
//     describe('#isSpare',function() {
//       beforeEach(function() {
//         frame.isSpare();
//       });
//
//       it('is worth five points',function() {
//         expect(frame.points).toEqual(5);
//       });
//     });
