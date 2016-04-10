describe("scoreCard", function(){

  beforeEach(function(){
    DummyFrame = function(){
      return jasmine.createSpyObj('dummyframe',['pushExtra','pushNormal', 'calculateScore']);
    };
    testScoreCard = new Scorecard(DummyFrame);

  });

  describe("variables", function(){

    it("contains a frame array", function(){
      expect(testScoreCard.frames.length).toEqual(12);
    });

    it("contains a currentFrame counter", function(){
      expect(testScoreCard.currentFrame).toEqual(0);
    });

    it("contains a gameOver flag", function(){
      expect(testScoreCard.gameOver).toEqual(false);
    });

  });

  describe("#pushScore", function(){

    beforeEach(function(){
      testScoreCard.pushScore(5,testScoreCard.frames);
    });

    it("set score on current frame", function(){
      expect(testScoreCard.frames[0].pushNormal).toHaveBeenCalled();
    });

    it("pushes score to previous frame", function(){
      expect(testScoreCard.frames[1].pushExtra).toHaveBeenCalled();
    });

    it("pushes score to 2nd previous frame", function(){
      expect(testScoreCard.frames[2].pushExtra).toHaveBeenCalled();
    });

  });

  describe("#calculateTotalScore", function(){

    beforeEach(function(){
        testScoreCard.calculateTotalScore();
    });

    it("calls #calculateScore on frames", function(){
      expect(testScoreCard.frames[9].calculateScore).toHaveBeenCalled();
    });

    it("does not call #calculateScore on the bonus frames", function(){
      expect(testScoreCard.frames[10].calculateScore.calls.count()).toEqual(0);
    });

  });


});
