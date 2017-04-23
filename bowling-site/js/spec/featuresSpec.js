
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
      it('Regular Game',function(){
        expect(game.throwsLeft).toEqual(21);
        for (i = 0; i < maximumThrows; i++) {
          game.throwBall(4);
        }
        expect(game.totalScore).toEqual(80);
        expect(game.throwsLeft).toEqual(0);
        // expect(game.framesPlayed).toEqual(10);
      });
    });


    // it('Spare Game for 9 throws',function(){
    //   expect(game.throwsLeft).toEqual(21);
    //   for (i = 0; i < maximumThrows-1; i++) {
    //     game.throwBall(5);
    //   }
    //   expect(game.totalScore).toEqual(135);
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
      it('Counts the bonus for a spare frame',function(){
        spareThrowScore = 5
        for (i = 0; i < 2; i++) {
          game.throwBall(spareThrowScore);
        }
          game.throwBall(6);
          game.throwBall(3);
        expect(game.totalScore).toEqual(25);

      });

      it('Counts the bonus for a strike frame',function(){
        game.throwBall(10);
        game.throwBall(6);
        game.throwBall(3);
        expect(game.totalScore).toEqual(28);

      });

      it('Counts the bonus for a two strikes in a row',function(){
        game.throwBall(10);
        game.throwBall(10);
        game.throwBall(6);
        game.throwBall(3);
        expect(game.totalScore).toEqual(26+19+9)
      });

      it('Counts the bonus for a three strikes in a row',function(){
        game.throwBall(10);
        game.throwBall(10);
        game.throwBall(10);
        game.throwBall(6);
        game.throwBall(3);
        expect(game.totalScore).toEqual(84)
      });

      it('Counts the bonus for a 9 strikes in a row',function(){
        game.throwBall(10);
        game.throwBall(10);
        game.throwBall(10);
        game.throwBall(10);
        game.throwBall(10);
        game.throwBall(10);
        game.throwBall(10);
        game.throwBall(10);
        game.throwBall(10);
        game.throwBall(5);
        game.throwBall(4);
        expect(game.totalScore).toEqual(263)
      });
    });



    it('passes some serious heavyTesting' ,function(){

      testArray = [
                  [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],0],
                  [[10,10,10,10,10,10,10,10,10,10,10,10,],300],
                  [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],20],
                  [[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6],151],]

      for (i = 0; i < testArray.length; i++) {
        test = testArray[i]
        throws = test[0]
        expectation = test[1]
        for (i = 0; i < throws.length; i++) {
          game.throwBall(throws[i])
        }
        expect(game.totalScore).toEqual(expectation)
      }
    });






});
