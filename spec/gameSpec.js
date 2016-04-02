describe('Bowling Game', function(){

  var testGame;
  var testFrame;

  beforeEach(function(){
    testGame = new Game();
    testFrame = jasmine.createSpyObj('Frame', ['score', 'balls', 'isComplete', 'isStrike']);

  });

  describe('Initial status', function(){
    describe('#totalScore', function(){
      it('is initiated as zero', function(){
        expect(testGame.totalScore).toEqual(0);
      });
    });
    describe('#scoreBoard', function(){
      it('is initiated as empty array', function(){
        expect(testGame.scoreBoard).toEqual([]);
      });
    });
    describe('#frameCount', function(){
      it('starts from 1', function(){
        expect(testGame.frameCount).toEqual(1);
      });
    });
  });

  describe('Prototypes', function(){
    describe('#updateScoreBoard()', function(){
      it('adds a frame once it\'s completed', function(){
        testFrame.isComplete.and.returnValue(true);
        testFrame.balls.and.returnValue([10])
        testGame.updateScoreBoard(testFrame);
        expect(testFrame.isComplete).toHaveBeenCalled();
        expect(testGame.frameCount).toEqual(2);
      });
      it('does not add a frame if it\'s not completed', function(){
        testFrame.isComplete.and.returnValue(false);
        testGame.updateScoreBoard(testFrame);
        expect(testFrame.isComplete).toHaveBeenCalled();
        expect(testGame.frameCount).toEqual(1);
      });
    });
  });
});
