describe('Frame', function(){

  var testFrame;

  beforeEach(function(){
    testFrame = new Frame();
  });

  describe('Initial status', function(){
    describe('#score', function(){
      it('is initialised as zero', function(){
        expect(testFrame.score).toEqual(0);
      });
    });
    describe('#balls', function(){
      it('is initiated as empty array', function(){
        expect(testFrame.balls).toEqual([]);
      });
    });
  });

  describe('Prototypes', function(){
    describe('#addScore()', function(){
      it('adds 1st score to the frame and updates the score', function(){
        testFrame.addScore(5);
        expect(testFrame.balls).toEqual([5]);
        expect(testFrame.score).toEqual(5);
      });
      it('appends 2nd score to the frame', function(){
        testFrame.addScore(5);
        testFrame.addScore(2);
        expect(testFrame.balls).toEqual([5,2]);
        expect(testFrame.score).toEqual(7);
      });
      it('cannot add a score above 10', function(){
        expect(function(){
          testFrame.addScore(11);
        }).toThrowError('A frame\'s total score cannot be above 10');
      });
      it('cannot add a score that makes frame\'s score above 10', function(){
        testFrame.addScore(10);
        expect(function(){
          testFrame.addScore(1);
        }).toThrowError('A frame\'s total score cannot be above 10');
      });
      it('cannot add a score below 0', function(){
        expect(function(){
          testFrame.addScore(-1);
        }).toThrowError('A score cannot be below 0');
      });
    });

    describe('#isComplete()', function(){
      it('returns false if frame has no score', function(){
        expect(testFrame.isComplete()).toEqual(false);
      });
      it('returns false if frame has a score < 10', function(){
        testFrame.addScore(3);
        expect(testFrame.isComplete()).toEqual(false);
      });
      it('returns true if frame has a total score of 10', function(){
        testFrame.addScore(10);
        expect(testFrame.isComplete()).toEqual(true);
      });
      it('returns true if frame has two scores', function(){
        testFrame.addScore(1);
        testFrame.addScore(5);
        expect(testFrame.isComplete()).toEqual(true);
      })
    });

    describe('#isStrike()', function(){
      it('returns true if frame has a score of 10', function(){
        testFrame.addScore(10);
        expect(testFrame.isStrike()).toEqual(true);
      });
      it('returns false if frame has a score < 10', function(){
        testFrame.addScore(5);
        expect(testFrame.isStrike()).toEqual(false);
      });
      it('return false if frame has two scores', function(){
        testFrame.addScore(4);
        testFrame.addScore(6);
        expect(testFrame.isStrike()).toEqual(false);
      });
    });

    describe('#isSpare()', function(){
      it('returns false if frame has strike', function(){
        testFrame.addScore(10);
        expect(testFrame.isSpare()).toEqual(false);
      })
      it('returns false if the sum of two scores < 10', function(){
        testFrame.addScore(4);
        testFrame.addScore(5);
        expect(testFrame.isSpare()).toEqual(false);
      })
      it('returns true if the sum of two scores is 10', function(){
        testFrame.addScore(4);
        testFrame.addScore(6);
        expect(testFrame.isSpare()).toEqual(true);
      });
    });
  });
});
