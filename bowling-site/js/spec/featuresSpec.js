
describe('Features',function(){
  var maximumThrows
  beforeEach(function() {
    maximumThrows = 21;

    game = new Game();
  });

  // As a slightly sub-par player
  // So that I can lose to all my mates
  // I want to be able to play a gutter game
  describe('CONTEXT: Plays a Full Game:', function(){
    it('Gutter Game',function(){
      expect(game.throwsLeft).toEqual(21);
        for (i = 0; i < maximumThrows; i++) {
          game.throwBall(0);
        }
        expect(game.totalScore).toEqual(0);
        expect(game.throwsLeft).toEqual(0);
        // expect(game.framesPlayed).toEqual(10);
      });
    });

    it('Regular Game',function(){
      expect(game.throwsLeft).toEqual(21);
        for (i = 0; i < maximumThrows; i++) {
          game.throwBall(4);
        }
        expect(game.totalScore).toEqual(80);
        expect(game.throwsLeft).toEqual(0);
        // expect(game.framesPlayed).toEqual(10);
    });

    // it('Spare Game',function(){
    //   expect(game.throwsLeft).toEqual(21);
    //   for (i = 0; i < maximumThrows; i++) {
    //     game.throwBall(5);
    //   }
    //   expect(game.totalScore).toEqual(150);
    // });

    // As a player who's just started the game
    // and I can keep playing
    // I want to play a whole frame

    describe('Play Frame',function(){
      it('Play a regular frame', function(){
        regularThrowScore = 4
        for (i = 0; i < 2; i++) {
          game.throwBall(regularThrowScore);
        }
        expect(game.totalScore).toEqual(8);

      });
      // it('Counts the bonus for a spare frame',function(){
      //   spareThrowScore = 5
      //   for (i = 0; i < 3; i++) {
      //     game.throwBall(spareThrowScore);
      //   }
      //   expect(game.totalScore).toEqual(15);
      //
      // });
    });





});
