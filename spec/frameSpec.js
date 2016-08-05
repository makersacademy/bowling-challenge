// describe('Frame', function(){
//   var frame;
//   var bowling;
//
//   beforeEach(function(){
//     frame = new Frame();
//     bowling = new Bowling();
//   })
//
//   var oneRoll = function(){
//     var points = bowling.roll(frame.pins);
//     frame.score(points);
//   }
//
//   var twoRolls = function(){
//     oneRoll();
//     var points = bowling.roll(frame.remainingPins())
//     frame.score(points);
//   }
//
//   describe('score', function(){
//     it('saves the first roll score in current frame', function(){
//       oneRoll();
//       expect(frame.currentFrame[0]).toEqual(frame.currentFrame[0]);
//       })
//
//     it('saves the second roll score in the current frame', function(){
//       spyOn(Math, 'random').and.returnValue(0.4);
//       twoRolls();
//       expect(frame.currentFrame[1]).toEqual(3);
//     })
//   })
//
//   describe('reaminingPins', function(){
//     it('reduces the number of pins by those knocked', function(){
//       spyOn(Math, 'random').and.returnValue(0.4);
//       oneRoll();
//       expect(frame.remainingPins()).toEqual(5);
//     })
//   })
//
//   describe('strike', function(){
//     it('returns true if the pins knocked are 10', function(){
//       spyOn(Math, 'random').and.returnValue(0.9);
//       oneRoll();
//       expect(frame.strike(frame.currentFrame[0])).toBeTruthy();
//     })
//   })
//
//   describe('spare', function(){
//     it('returns true if total pins knocked are 10', function(){
//       for (var i = 0; i < 2; i++) {
//         frame.score(frame.pins/2);
//     }
//       var points = frame.currentFrame[0] + frame.currentFrame[1]
//       expect(frame.spare(points)).toBeTruthy();
//     })
//   })
// });
