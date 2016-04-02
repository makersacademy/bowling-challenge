describe('BowlingGame', function(){
  var testGame;

  beforeEach(function(){
    testGame = new BowlingGame();
  });

  describe('Object status', function(){
    describe('#totalScore', function(){
      it('is initiated as zero', function(){
        expect(testGame.totalScore).toEqual(0);
      });
    });

    describe('#scoreBoard', function(){
      it('is initiated as empty array', function(){
        expect(testGame.scoreBoard).toEqual([[],[],[],[],[],
                                             [],[],[],[],[]]);
      });
    });

    describe('#currentRound', function(){
      it('starts from 0', function(){
        expect(testGame.currentRound).toEqual(0);
      });
    });
  });
  describe('Prototypes', function(){
    describe('#addScores', function(){
      it('adds 1st score to the current round\'s score', function(){
        testGame.addScores(5);
        expect(testGame.roundScore()).toEqual([5]);
      });
      it('appends 2nd score to the current round\'s score', function(){
        testGame.addScores(5);
        testGame.addScores(2);
        expect(testGame.roundScore()).toEqual([5,2]);
      });
    });

    describe('#isRoundComplete', function(){
      it('returns false if current round has no score', function(){
        expect(testGame.isRoundComplete()).toEqual(false);
      });
      it('returns false if current round has a score', function(){
        testGame.addScores(5);
        expect(testGame.isRoundComplete()).toEqual(false);
      });
      it('returns true if current round has a score of 10', function(){
        testGame.addScores(10);
        expect(testGame.isRoundComplete()).toEqual(true);
      });
      it('returns true if current round has two scores', function(){
        testGame.addScores(5);
        testGame.addScores(2);
        expect(testGame.isRoundComplete()).toEqual(true);
      });
      it('increments current round if true', function(){
        var round = testGame.currentRound;
        testGame.addScores(10);
        testGame.isRoundComplete();
        expect(testGame.currentRound).toEqual(round+1);
      })
    });

    describe('#roundScore', function(){
      it('returns score board of current round', function(){
        testGame.addScores(5);
        testGame.addScores(2);
        expect(testGame.roundScore()).toEqual([5,2]);
      });
    });

    describe('#isStrike', function(){
      it('returns true if a current round has a score of 10', function(){
        testGame.addScores(10);
        expect(testGame.isStrike()).toEqual(true);
      });
      it('returns false if a current round has a score < 10', function(){
        testGame.addScores(5);
        expect(testGame.isStrike()).toEqual(false);
      });
      it('return false if a current round has two scores', function(){
        testGame.addScores(4);
        testGame.addScores(6);
        expect(testGame.isStrike()).toEqual(false);
      });
    });
  });
});
