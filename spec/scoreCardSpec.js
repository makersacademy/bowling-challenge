describe("scoreCard", function(){

  beforeEach(function(){
    DummyFrame = function(){
      dum = jasmine.createSpyObj('dummyframe',['pushExtra','pushNormal','setExtra','calculateScore','isTurnCompleted']);
      dum.addExtra = 0;
      dum.throwNumber = 0;
      return dum;
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

  describe("#checkGameOver", function(){

    it("set gameOver flag to true when there are no bonus frames", function(){
      testScoreCard.checkGameOver();
      expect(testScoreCard.gameOver).toEqual(true);
    })

  });

  describe("#advanceGame", function(){

    it("calls on #isTurnCompleted", function(){
      testScoreCard.advanceGame();
      expect(testScoreCard.frames[0].isTurnCompleted).toHaveBeenCalled();
    });

  });

  describe("#checkEnd", function(){

    beforeEach(function(){
      spyOn(testScoreCard, 'checkGameOver');
      testScoreCard.frames[9].isTurnCompleted = function(){
        return true;
      };
    });

    it("calls #checkGameOver on last round", function(){
      testScoreCard.currentFrame = 9;
      testScoreCard.checkEnd();
      expect(testScoreCard.checkGameOver).toHaveBeenCalled();
    });

  });

  describe("#newThrow", function(){

    beforeEach(function(){
        spyOn(testScoreCard,'pushScore');
        spyOn(testScoreCard,'checkEnd');
        spyOn(testScoreCard,'advanceGame');
        testScoreCard.newThrow();
    });

    it("calls #pushScore", function(){
      expect(testScoreCard.pushScore).toHaveBeenCalled();
    });

    it("calls #setExtra on current frame", function(){
      expect(testScoreCard.frames[0].setExtra).toHaveBeenCalled();
    });

    it("calls #checkEnd", function(){
      expect(testScoreCard.checkEnd).toHaveBeenCalled();
    });

    it("calls #advanceGame", function(){
      expect(testScoreCard.advanceGame).toHaveBeenCalled();
    });
  });

})
