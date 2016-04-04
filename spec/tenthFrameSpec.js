describe('Tenth Frame', function(){

  var testTenthFrame;

  beforeEach(function(){
    testTenthFrame = new TenthFrame();
  });

  describe('Initial status', function(){
    describe('#score', function(){
      it('is initialised as zero', function(){
        expect(testTenthFrame.score).toEqual(0);
      });
    });
    describe('#balls', function(){
      it('is initiated as empty array', function(){
        expect(testTenthFrame.balls).toEqual([]);
      });
    });
  });

  describe('Prototypes', function(){
    describe('#addScore()', function(){
      it('adds 1st score to the frame and updates the score', function(){
        testTenthFrame.addScore(5);
        expect(testTenthFrame.balls).toEqual([5]);
        expect(testTenthFrame.score).toEqual(5);
      });
      it('appends 2nd score to the frame', function(){
        testTenthFrame.addScore(5);
        testTenthFrame.addScore(2);
        expect(testTenthFrame.balls).toEqual([5,2]);
        expect(testTenthFrame.score).toEqual(7);
      });
      it('cannot add a score above 10', function(){
        expect(function(){
          testTenthFrame.addScore(11);
        }).toThrowError('A score cannot be below 10');
      });
      it('cannot add a score below 0', function(){
        expect(function(){
          testTenthFrame.addScore(-1);
        }).toThrowError('A score cannot be below 0');
      });
    });

    describe('#isComplete()', function(){
      it('returns false if the 1st ball is strike', function(){
        testTenthFrame.addScore(10);
        expect(testTenthFrame.isComplete()).toEqual(false);
      });
      it('returns false if the 1st ball is strike and 2nd is not',function(){
        testTenthFrame.addScore(10);
        testTenthFrame.addScore(5);
        expect(testTenthFrame.isComplete()).toEqual(false);
      })

      it('returns true if frame has two scores and no spare', function(){
        testTenthFrame.addScore(1);
        testTenthFrame.addScore(5);
        expect(testTenthFrame.isComplete()).toEqual(true);
      })
      it('returns false if the 2nd ball is spare', function(){
        testTenthFrame.addScore(4);
        testTenthFrame.addScore(6);
        expect(testTenthFrame.isComplete()).toEqual(false);
      });
      it('returns true if frame has three scores no matter the score', function(){
        testTenthFrame.addScore(4);
        testTenthFrame.addScore(6);
        testTenthFrame.addScore(8);
        expect(testTenthFrame.isComplete()).toEqual(true);
      });
    });

    describe('#isStrike()', function(){
      it('returns true if frame has a score of 10', function(){
        testTenthFrame.addScore(10);
        expect(testTenthFrame.isStrike()).toEqual(true);
      });
      it('returns false if frame has a score < 10', function(){
        testTenthFrame.addScore(5);
        expect(testTenthFrame.isStrike()).toEqual(false);
      });
      it('return true if the 1st ball is strike and 2nd is not', function(){
        testTenthFrame.addScore(10);
        testTenthFrame.addScore(6);
        expect(testTenthFrame.isStrike()).toEqual(true);
      });
      it('return true if the 1st and 2nd balls are both strikes', function(){
        testTenthFrame.addScore(10);
        testTenthFrame.addScore(10);
        expect(testTenthFrame.isStrike()).toEqual(true);
      });
    });

    describe('#isSpare()', function(){
      it('returns false if the frame has a strike', function(){
        testTenthFrame.addScore(10);
        expect(testTenthFrame.isSpare()).toEqual(false);
      })
      it('returns true if the sum of two scores is 10', function(){
        testTenthFrame.addScore(4);
        testTenthFrame.addScore(6);
        expect(testTenthFrame.isSpare()).toEqual(true);
      });
    });
  });
});
