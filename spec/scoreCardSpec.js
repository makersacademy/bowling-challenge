describe("scoreCard", function(){

  beforeEach(function(){
    DummyFrame = function(){};
    testScoreCard = new Scorecard(DummyFrame)
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


});
