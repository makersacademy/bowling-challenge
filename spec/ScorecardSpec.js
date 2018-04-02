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
    it("adds two numbers together to update the _score hash", function() {
      scorecard.calculate(1,2,5);
      expect(scorecard._score).toEqual({1: [2,5,7,"normal"]});
    });

    it("knows when it's a strike", function() {
      scorecard.calculate(1,10,0);
      expect(scorecard._score[1][3]).toEqual("strike");
    });

    it("knows when it's a spare", function() {
      scorecard.calculate(1,5,5);
      expect(scorecard._score[1][3]).toEqual("spare");
    });

    it("throws an error when the two numbers sum to exceed 10", function() {
      expect(function() { scorecard.calculate(1,6,5) }).toThrow("Invalid score - check your roll input values!");
    });

    it("throws an error when negative numbers are entered", function() {
      expect(function() { scorecard.calculate(1,-6,5) }).toThrow("Invalid score - check your roll input values!");
    });

    it("throws an error when non-integers are entered", function() {
      expect(function() { scorecard.calculate(1,"A",5) }).toThrow("Invalid score - check your roll input values!");
    });

  });


  describe("#calc_bonus", function() {
    beforeEach(function() {

    });

    it("adds a bonus of 0 for frames which score less than 10", function() {
      scorecard.calculate(1,2,2);
      scorecard.calculate(2,3,3);
      scorecard.calc_bonus(1)
      expect(scorecard._score[1]).toEqual([2,2,4,"normal",0]);
    });

    it("adds a bonus of the next roll for spares", function() {
      scorecard.calculate(1,5,5);
      scorecard.calculate(2,3,5);
      scorecard.calc_bonus(1)
      expect(scorecard._score[1]).toEqual([5,5,10,"spare",3]);
    });

    it("adds a bonus of the next two rolls for strikes", function() {
      scorecard.calculate(1,10,0);
      scorecard.calculate(2,3,5);
      scorecard.calc_bonus(1)
      expect(scorecard._score[1]).toEqual([10,0,10,"strike",8]);
    });
  });

  describe("#subtotal", function() {
    scorecard.calculate(1,5,5);
    scorecard.calculate(2,3,5);
    scorecard.calculate(5,5,10);
    scorecard.calculate(10,0,10);
    scorecard.calc_bonus(1)
    scorecard.subtotal[0]
  });
});
