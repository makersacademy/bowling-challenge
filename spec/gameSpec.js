describe('Bowling Game', function(){

  var testGame;
  var testFrame;
  var normalFrame;
  var spareFrame;
  var strikeFrame;
  var tenthFrame;


  beforeEach(function(){
    testGame = new Game(testFrame);
    testFrame = jasmine.createSpyObj('Frame', ['getScore', 'getBalls', 'isComplete', 'isStrike']);
    normalFrame = jasmine.createSpyObj('Frame', ['getBalls', 'getScore', 'isStrike', 'isSpare']);
    spareFrame = jasmine.createSpyObj('Frame', ['getBalls', 'getScore', 'isStrike', 'isSpare']);
    strikeFrame = jasmine.createSpyObj('Frame', ['getBalls', 'getScore', 'isStrike', 'isSpare']);
    tenthFrame = jasmine.createSpyObj('Frame', ['getBalls', 'getScore', 'isStrike', 'isSpare']);
  });

  describe('Initial status', function(){
    describe('#totalScore', function(){
      it('is initiated as zero', function(){
        expect(testGame.totalScore).toEqual(0);
      });
    });
    describe('#completedFrames', function(){
      it('is initiated as empty array', function(){
        expect(testGame.completedFrames).toEqual([]);
      });
    });
    describe('#frameCount', function(){
      it('starts from 1', function(){
        expect(testGame.frameCount).toEqual(0);
      });
    });
  });

  describe('Prototypes', function(){
    describe('#updateCompletedFrames()', function(){
      it('adds a frame score once it\'s completed', function(){
        testGame.currentFrame = testFrame
        testFrame.isComplete.and.returnValue(true);
        testFrame.getBalls.and.returnValue([10])
        testGame.updateCompletedFrames();
        expect(testFrame.isComplete).toHaveBeenCalled();
        expect(testGame.frameCount).toEqual(1);
      });
      it('does not add a frame score if it\'s not completed', function(){
        testGame.currentFrame = testFrame
        testFrame.isComplete.and.returnValue(false);
        testGame.updateCompletedFrames(testFrame);
        expect(testFrame.isComplete).toHaveBeenCalled();
        expect(testGame.frameCount).toEqual(0);
      });
    });

    describe('#createFrame', function(){
      it('creates a next frame by calling Frame', function(){
        var nextFrame = jasmine.createSpy('nextFrame');
        testGame.createFrame(nextFrame);
        expect(testGame.currentFrame).toEqual(nextFrame);
      });
    });

    describe('#calcTotalScore', function(){
      it('adds up all the score if there is no strike/spare', function(){
        normalFrame.getBalls.and.returnValue([3,6]);
        normalFrame.getScore.and.returnValue(9);
        normalFrame.isSpare.and.returnValue(false);
        normalFrame.isStrike.and.returnValue(false);
        testGame.completedFrames = [normalFrame, normalFrame];
        testGame.frameCount = 2
        testGame.calcTotalScore();
        expect(testGame.totalScore).toEqual(18)
      });
      it('adds the 1st ball of the next frame if a frame is spare', function(){
        spareFrame.getBalls.and.returnValue([4,6]);
        spareFrame.getScore.and.returnValue(10);
        spareFrame.isSpare.and.returnValue(true);
        spareFrame.isStrike.and.returnValue(false);
        normalFrame.getBalls.and.returnValue([5,2]);
        normalFrame.getScore.and.returnValue(7);
        normalFrame.isSpare.and.returnValue(false);
        normalFrame.isStrike.and.returnValue(false);
        testGame.completedFrames = [spareFrame, normalFrame];
        testGame.frameCount = 2
        testGame.calcTotalScore();
        expect(testGame.totalScore).toEqual(22)
      });
      it('adds score of the next frame (not strike) if a frame is strike', function(){
        strikeFrame.getBalls.and.returnValue([10]);
        strikeFrame.getScore.and.returnValue(10);
        strikeFrame.isSpare.and.returnValue(false);
        strikeFrame.isStrike.and.returnValue(true);
        normalFrame.getBalls.and.returnValue([5,2]);
        normalFrame.getScore.and.returnValue(7);
        normalFrame.isSpare.and.returnValue(false);
        normalFrame.isStrike.and.returnValue(false);
        testGame.completedFrames = [strikeFrame, normalFrame];
        testGame.frameCount = 2
        testGame.calcTotalScore();
        expect(testGame.totalScore).toEqual(24)
      });
      it('adds score of the next strike game and one more ball if a frame is strike', function(){
        strikeFrame.getBalls.and.returnValue([10]);
        strikeFrame.getScore.and.returnValue(10);
        strikeFrame.isSpare.and.returnValue(false);
        strikeFrame.isStrike.and.returnValue(true);
        normalFrame.getBalls.and.returnValue([5,2]);
        normalFrame.getScore.and.returnValue(7);
        normalFrame.isSpare.and.returnValue(false);
        normalFrame.isStrike.and.returnValue(false);
        testGame.completedFrames = [strikeFrame, strikeFrame, normalFrame];
        testGame.frameCount = 3
        testGame.calcTotalScore();
        expect(testGame.totalScore).toEqual(49)
      });
      it('returns 300 for a perfect game', function(){
        strikeFrame.getBalls.and.returnValue([10]);
        strikeFrame.getScore.and.returnValue(10);
        strikeFrame.isSpare.and.returnValue(false);
        strikeFrame.isStrike.and.returnValue(true);
        tenthFrame.getBalls.and.returnValue([10,10,10]);
        tenthFrame.getScore.and.returnValue(30);
        tenthFrame.isSpare.and.returnValue(false);
        tenthFrame.isStrike.and.returnValue(true);
        testGame.completedFrames = [strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    tenthFrame];
        testGame.frameCount = 10;
        testGame.calcTotalScore();
        expect(testGame.totalScore).toEqual(300)
      });
      it('returns 245', function(){
        strikeFrame.getBalls.and.returnValue([10]);
        strikeFrame.getScore.and.returnValue(10);
        strikeFrame.isSpare.and.returnValue(false);
        strikeFrame.isStrike.and.returnValue(true);
        normalFrame.getBalls.and.returnValue([1,1]);
        normalFrame.getScore.and.returnValue(2);
        normalFrame.isSpare.and.returnValue(false);
        normalFrame.isStrike.and.returnValue(false);
        testGame.completedFrames = [strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    normalFrame];
        testGame.frameCount = 10;
        testGame.calcTotalScore();
        expect(testGame.totalScore).toEqual(245)
      });
      it('returns 222', function(){
        strikeFrame.getBalls.and.returnValue([10]);
        strikeFrame.getScore.and.returnValue(10);
        strikeFrame.isSpare.and.returnValue(false);
        strikeFrame.isStrike.and.returnValue(true);
        normalFrame.getBalls.and.returnValue([3,6]);
        normalFrame.getScore.and.returnValue(9);
        normalFrame.isSpare.and.returnValue(false);
        normalFrame.isStrike.and.returnValue(false);
        testGame.completedFrames = [strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    normalFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    normalFrame];
        testGame.frameCount = 10;
        testGame.calcTotalScore();
        expect(testGame.totalScore).toEqual(222)
      });
      it('returns 187', function(){
        strikeFrame.getBalls.and.returnValue([10]);
        strikeFrame.getScore.and.returnValue(10);
        strikeFrame.isSpare.and.returnValue(false);
        strikeFrame.isStrike.and.returnValue(true);
        spareFrame.getBalls.and.returnValue([7,3]);
        spareFrame.getScore.and.returnValue(10);
        spareFrame.isSpare.and.returnValue(true);
        spareFrame.isStrike.and.returnValue(false);
        normalFrame.getBalls.and.returnValue([3,6]);
        normalFrame.getScore.and.returnValue(9);
        normalFrame.isSpare.and.returnValue(false);
        normalFrame.isStrike.and.returnValue(false);
        testGame.completedFrames = [strikeFrame,
                                    strikeFrame,
                                    spareFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    normalFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    spareFrame,
                                    normalFrame];
        testGame.frameCount = 10;
        testGame.calcTotalScore();
        expect(testGame.totalScore).toEqual(187)
      });
      it('returns 183', function(){
        strikeFrame.getBalls.and.returnValue([10]);
        strikeFrame.getScore.and.returnValue(10);
        strikeFrame.isSpare.and.returnValue(false);
        strikeFrame.isStrike.and.returnValue(true);
        spareFrame.getBalls.and.returnValue([5,5]);
        spareFrame.getScore.and.returnValue(10);
        spareFrame.isSpare.and.returnValue(true);
        spareFrame.isStrike.and.returnValue(false);
        normalFrame.getBalls.and.returnValue([8,1]);
        normalFrame.getScore.and.returnValue(9);
        normalFrame.isSpare.and.returnValue(false);
        normalFrame.isStrike.and.returnValue(false);
        tenthFrame.getBalls.and.returnValue([4,6,5]);
        tenthFrame.getScore.and.returnValue(15);
        tenthFrame.isSpare.and.returnValue(false);
        tenthFrame.isStrike.and.returnValue(true);
        testGame.completedFrames = [strikeFrame,
                                    strikeFrame,
                                    spareFrame,
                                    strikeFrame,
                                    strikeFrame,
                                    normalFrame,
                                    strikeFrame,
                                    spareFrame,
                                    normalFrame,
                                    tenthFrame];
        testGame.frameCount = 10;
        testGame.calcTotalScore();
        expect(testGame.totalScore).toEqual(183)
      });
    });
  });
});
