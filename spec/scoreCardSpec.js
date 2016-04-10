describe("scoreCard", function(){

  beforeEach(function(){
    DummyFrame = function(){
      return jasmine.createSpyObj('dummyframe',['pushExtra','pushNormal']);
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

  describe("#setScore", function(){

    beforeEach(function(){
      testScoreCard.setScore(5,testScoreCard.frames);
    });

    it("set score on current frame", function(){
      expect(testScoreCard.frames[0].pushNormal).toHaveBeenCalled()
    });

    it("pushes score to previous frame", function(){
      expect(testScoreCard.frames[1].pushExtra).toHaveBeenCalled()
    });

    it("pushes score to 2nd previous frame", function(){
      expect(testScoreCard.frames[2].pushExtra).toHaveBeenCalled()
    });

  });


});
