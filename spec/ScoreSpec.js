describe("Score", function(){
  var score;

  beforeEach(function(){
    score = new Score();
  });

  describe("storing frames", function(){
    it("should score frames as arrays inside an array", function(){
      score.addRoll(1);
      score.addRoll(4);
      score.addRoll(7);
      score.addRoll(1);
      expect(score._results).toEqual([[1,4],[7,1]]);
    });

    it("should close frame on strike", function(){
      score.addRoll(10);
      score.addRoll(7);
      score.addRoll(1);
      expect(score._results).toEqual([[10],[7,1]])
    });

  });

  describe("calculating result", function(){
    it("should add a point for each pin", function(){
      score.addRoll(1);
      score.addRoll(4);
      score.addRoll(7);
      score.addRoll(1);
      expect(score._totalScore).toEqual(13)
    });

    it("should add extra points for spares", function(){
      score.addRoll(1);
      score.addRoll(9);
      score.addRoll(3);
      score.addRoll(1);
      expect(score._totalScore).toEqual(17)
    });

    it("should add extra points for strike", function(){
      score.addRoll(10);
      score.addRoll(7);
      score.addRoll(1);
      expect(score._totalScore).toEqual(26)
    });

    it("should handle few strikes in a row correctly", function(){
      score.addRoll(10);
      score.addRoll(10);
      score.addRoll(10);
      score.addRoll(1);
      score.addRoll(3);
      expect(score._totalScore).toEqual(69)
    });

    it("should only count 10 frames", function(){
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      score.addRoll(1);
      expect(score._totalScore).toEqual(20)
    });

    it("should handle perfect game", function(){
      score.addRoll(10);
      score.addRoll(10);
      score.addRoll(10);
      score.addRoll(10);
      score.addRoll(10);
      score.addRoll(10);
      score.addRoll(10);
      score.addRoll(10);
      score.addRoll(10);
      score.addRoll(10);
      score.addRoll(10);
      score.addRoll(10);
      expect(score._totalScore).toEqual(300)
    });

  });

});
