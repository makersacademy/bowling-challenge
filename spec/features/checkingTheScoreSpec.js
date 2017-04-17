describe ('FEATURE TEST: Checking the score', function () {

  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe('seeing the score for each frame', function() {

    it('passes the number of pins knocked down to the frame', function() {
      game.bowlA(5);
      game.bowlA(4);
      expect(game.framesLog.frames[0]).toEqual([5,4]);
    });

    it('allows you to see the pins knocked down for each frame', function() {
      game.bowlA(4);
      game.bowlA(5);
      game.bowlA(3);
      game.bowlA(4);
      expect(game.seeFrameResults()).toEqual([[4,5],[3,4]])
    });

    it('allows you to see the overall score for each frame', function() {
      game.bowlA(4);
      game.bowlA(5);
      game.bowlA(3);
      game.bowlA(4);
      expect(game.seeFrameScores()).toEqual([[9],[7]])
    });

    it('records the result of strikes correctly', function() {
      game.bowlA(10)
      game.bowlA(3)
      game.bowlA(4)
      expect(game.seeFrameResults()).toEqual([[10],[3,4]])
    });
  });

  describe ('Bonus points', function() {
    describe('Spares', function() {
      it('scores a spare correctly if last complete frame', function() {
        game.bowlA(8);
        game.bowlA(2);
        game.bowlA(5);
        expect(game.seeFrameScores()).toEqual([[15]])
      });

      it('scores a spare correctly if the next frame is complete', function() {
        game.bowlA(8);
        game.bowlA(2);
        game.bowlA(5);
        game.bowlA(4);
        game.bowlA(4);
        expect(game.seeFrameScores()[0]).toEqual([15])
      });
    });

    describe ('Strikes', function() {
      it('score a strike correctly if next frame has two balls', function() {
        game.bowlA(10);
        game.bowlA(2);
        game.bowlA(5);
        expect(game.seeFrameScores()).toEqual([[17], [7]])
      })

      it('score a strike correctly if next frame is also a strike', function() {
        game.bowlA(10);
        game.bowlA(10);
        game.bowlA(5);
        expect(game.seeFrameScores()).toEqual([[25]])
      })
    });
  });

  describe('Final score', function() {
    beforeEach(function() {
      var n;
      for (n=0; n<18; n++) {
        game.bowlA(4)
      }
    });

    it('is correct with a non bonus final frame', function() {
      game.bowlA(4);
      game.bowlA(4);
      expect(game.totalScore()).toEqual(80);
    });

    it('is correct with a spare final frame', function() {
      game.bowlA(4);
      game.bowlA(6);
      game.bowlA(5);
      expect(game.totalScore()).toEqual(87);
    });

    it('is correct with a spare final frame with strike bonus', function() {
      game.bowlA(4);
      game.bowlA(6);
      game.bowlA(10);
      expect(game.totalScore()).toEqual(92);
    });

    it('is correct with a strike final frame', function() {
      game.bowlA(10);
      game.bowlA(4);
      game.bowlA(4);
      expect(game.totalScore()).toEqual(90);
    });

    it('is correct with a strike final with two strike bonus\'s', function() {
      game.bowlA(10);
      game.bowlA(10);
      game.bowlA(10);
      expect(game.totalScore()).toEqual(102);
    });

    it('is correct for a perfect game', function() {
      var game = new Game();
      var n;
      for (n=0; n<12; n++) {
        game.bowlA(10)
      }
      expect(game.totalScore()).toEqual(300);
    });

    it('is correct for a gutter game', function() {
      var game = new Game();
      var n;
      for (n=0; n<20; n++) {
        game.bowlA(0)
      }
      expect(game.totalScore()).toEqual(0);
    });

  });
});
