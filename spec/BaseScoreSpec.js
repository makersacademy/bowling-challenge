describe("BaseScore", function() {

  beforeEach(function(){
    baseScore = new BaseScore();
  });

  describe("::new", function() {
    it("creates a new BaseScore object", function() {
      expect(baseScore._score).toEqual({});
    });
  });


  describe("#calculate", function() {
    it("adds two numbers together to update _score", function() {
      baseScore.calculate(1,5,5);
      expect(baseScore._score).toEqual({1: 10});
    });

    it("knows when it's a strike", function() {
      baseScore.calculate(1,10,0);
      expect(baseScore._strike).toBe(true);
    });

    it("knows when it's a spare", function() {
      baseScore.calculate(1,5,5);
      expect(baseScore._spare).toBe(true);
    });

  });
});
