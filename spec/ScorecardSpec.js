describe("Scorecard", function() {

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe("::new", function() {
    it("creates a new Scorecard object", function() {
      expect(scorecard._score).toEqual({});
    });
  });


  describe("#calculate", function() {
    it("adds two numbers together to update _score", function() {
      scorecard.calculate(1,5,5);
      expect(scorecard._score).toEqual({1: [5,5,10]});
    });

    it("knows when it's a strike", function() {
      scorecard.calculate(1,10,0);
      expect(scorecard._strike).toBe(true);
    });

    it("knows when it's a spare", function() {
      scorecard.calculate(1,5,5);
      expect(scorecard._spare).toBe(true);
    });

    it("throws an error when the two numbers sum to exceed 10", function(){
      expect(function() { scorecard.calculate(1,6,5) }).toThrow("Total exceeds 10 - check your inputs");
    });

  });

  describe("#calc_bonus", function() {
    beforeEach(function() {

    });

    it("adds a bonus of 0 for frames which score less than 10", function() {
 
    });

    it("adds a bonus of the next roll for spares", function() {

    });

    it("adds a bonus of the next two rolls for strikes", function() {

    });
  });
});
