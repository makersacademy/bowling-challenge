//
// // When player bowls a strike
//   // when next ball is a strike
//   // when next frame is a spare
//   // when next frame is under 10
// // When player bowls a spare
//   // when next ball is a strike
//   // when next ball is under 10
// // When player bowls a frame under 10]
//
//
//
//
// describe('Player bowls a frame', function(){
//
//   describe('When not a strike or spare', function(){
//     it('total score updates', function(){
//       // Setup
//       var game = new Game();
//       var frame1 = new Frame(game);
//       // Exercise
//       frame1.score(1, 7)
//       // Verify
//       expect(game.totalScore).toEqual(9)
//     });
//     it('current frame updates', function(){
//       // Setup
//       var game = new Game();
//       var frame1 = new Frame(game);
//       // Exercise
//       frame1.firstBallScore(7)
//       frame1.secondBallScore(2)
//       // Verify
//       expect(game.currentFrame).toEqual(2)
//     });
//   });
//
//   describe('When a strike', function(){
//     it('adds a bonus to the first frame score', function(){
//       // Setup
//       var game = new Game();
//       var frame1 = new Frame(game);
//       var frame2 = new Frame(game);
//       debugger;
//
//       frame1.firstBallScore(10, true)
//       expect(game.totalScore).toEqual(0);
//
//       frame2.firstBallScore(6)
//       frame2.secondBallScore(1)
//       expect(game.totalScore).toEqual(17)
//     });
//     // it('It updates the current frame for the game', function(){
//     //   // Setup
//     //   var game = new Game();
//     //   var frame1 = new Frame(game);
//     //   // Exercise
//     //   frame1.firstBallScore(10)
//     //   // Verify
//     //   expect(game.currentFrame).toEqual(2)
//     // });
//   });
//
//   // describe('When a spare', function(){
//   //   it('', function(){
//   //
//   //   });
//   // });
//
// });
