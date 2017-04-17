describe("Bowling Challenge", function() {

    beforeEach(function() {
      game = new BowlingGame();
    });

    it('can roll a gutter game', function() {
      for (i=1; i < 21; i++) {
        game.bowl(0);
      }
      expect(game.totalScore).toEqual(0);
    });

    it('can record all individual scores', function() {
      game.bowl(3);
      game.bowl(4);
      game.bowl(6);
      game.bowl(3);
      expect(game.allScores).toEqual([3,4,6,3]);
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
        for( i = 1; i < 20; i++) {
          game.bowl(4);
        }
          game.bowl(10);
          expect(game.lastFrameExtra).toEqual(true);
      });

      it('can calculate a maximum score with #isStrike', function() {
        for( i = 1; i < 12; i++) {
          game.bowl(10);
        }
          game.bowl(10);
          expect(game.totalScore).toEqual(300);
      });

      it('can calculate a a correct #totalscore', function() {
        game.bowl(10);
        game.bowl(10);
        for( i = 1; i < 18; i++) {
          game.bowl(3);
          }
          game.bowl(4);
          expect(game.totalScore).toEqual(94);
      });

      it('throws error if you bowl 3 times in final frame', function() {
        for( i = 1; i < 21; i++) {
          game.bowl(3);
          }
        expect(function() {game.bowl(3)}).toThrow(new Error (game.GAMEOVER_ERROR));
      });

    });

    describe("functionality of strikes & spares", function(){
      it('scoring is appropriate with one #strike in game', function() {
        game.bowl(3);
        game.bowl(4);
        game.bowl(10);
        for( i = 1; i < 17; i++) {
          game.bowl(3);
          }
          expect(game.totalScore).toEqual(71);
      });
      it('scoring is appropriate with one #spare in game', function() {
        game.bowl(3);
        game.bowl(7);
        game.bowl(6);
        for( i = 1; i < 18; i++) {
          game.bowl(3);
          }
          expect(game.totalScore).toEqual(73);
      });
      it('scoring is appropriate with a #spare followed by a #strike', function() {
        game.bowl(3);
        game.bowl(7);
        game.bowl(10);
        for( i = 1; i < 17; i++) {
          game.bowl(3);
          }
          expect(game.totalScore).toEqual(84);
      });
    });
});
