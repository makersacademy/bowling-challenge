
// When player bowls a strike
  // when next ball is a strike
  // when next frame is a spare
  // when next frame is under 10
// When player bowls a spare
  // when next ball is a strike
  // when next ball is under 10
// When player bowls a frame under 10


describe('Player bowls a frame', function(){

  describe('When not a strike or spare', function(){
    it('total score updates', function(){
      // Setup
      var game = new Game();
      // Exercise
      game.first_ball_score(7)
      game.second_ball_score(2)
      // Verify
      expect(game.total_score).toEqual(9)
    });
  });
//
//   describe('When a strike', function(){
//     describe('', function(){
//       it('total score ', function(){
//
//       });
//     });
//   });
//
//   describe('When a spare', function(){
//     it('', function(){
//
//     });
//   });
//
});
