describe("Bowling Challenge", function() {

    beforeEach(function() {
      game = new BowlingGame();
    });

    it('can roll a gutter game', function() {
      for (i=0; i < 20; i++) {
        game.bowl(0);
      }
      expect(game.totalScore).toEqual(0);
    });

    describe("scoring mechanism for game", function() {

      it('allows you to roll once & store #currentScore', function() {
        game.bowl(3);
        expect(game.currentScore).toEqual(3);
      });

      it('adds #currentScore to #totalScore at end of current go', function() {
        game.bowl(5);
        game.bowl(1);
        expect(game.totalScore).toEqual(6);
      });
      // it('#current score is never more than 10', function() {
      //   game.bowl(10);
      //   game.bowl(1);
      //   expect(game.currentScore).toEqual(1);
      // });

      it('it records a #strike', function() {
          game.bowl(10);
          expect(game.isStrike).toBe(true);
      });

      it('it records a #spare', function() {
          game.bowl(4);
          game.bowl(6);
          expect(game.isSpare).toBe(true);
      });

    });

    describe("mechanism of frames and total score in a game", function() {

      it('only allows 10 #frames in a game', function() {
        for( i = 0; i < 20; i++) {
          game.bowl(3);
        }
          expect(function() {game.bowl(3)}).toThrow(new Error (game.GAMEOVER_ERROR));
      });

      it('allows 3 turns if you get a #spare or #strike in #frame 10', function() {
        
      });


    });
});
