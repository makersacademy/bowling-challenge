describe('BowlingGame', function(){
  var testGame;

  beforeEach(function(){
    testGame = new BowlingGame();
  });

  describe('Object status', function(){
    describe('#totalScore', function(){
      it('is initiated as zero', function(){
        expect(testGame.totalScore).toEqual(DEFAULT_TOTAL);
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
});
