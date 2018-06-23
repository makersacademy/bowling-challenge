// // When player bowls a strike
//   // when next ball is a strike
//   // when next frame is a spare
//   // when next frame is under 10
// // When player bowls a spare
//   // when next ball is a strike
//   // when next ball is under 10
// // When player bowls a frame under 10
//
// describe('Frame', function(){
//   var game = {
//     updateTotalScore: function(score) {
//       totalScore += score;
//     }
//   };
//
//   // creates a spy for game and function updateTotalScore
//   beforeEach(function(){
//     spyOn(game, 'updateTotalScore')
//   });
//
//   describe('when not a strike or spare', function(){
//     it('updates current frame score', function(){
//       var frame = new Frame(game);
//       // Exercise
//       frame.firstBallScore(6)
//       frame.secondBallScore(2)
//       // Verify
//       expect(frame.currentFrameScore).toEqual(8)
//     });
//     it('updates total score', function(){
//       var frame = new Frame(game);
//       // Exercise
//       frame.firstBallScore(6);
//       frame.secondBallScore(2);
//       // Verify
//       expect(game.updateTotalScore).toHaveBeenCalledWith(frame.currentFrameScore);
//     });
//   });
//
//
// });
