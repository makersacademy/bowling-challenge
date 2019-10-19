describe("Round", function(){

  beforeEach(function(){
    round = new Round();
  });

  describe("setRoll1", function() {
    it("set the roll1 value", function(){
      round.setRoll1(7)

      expect(round.roll1).toEqual(7);
    });

    it("return a string error if value < 0", function() {

      expect(round.setRoll1(-1)).toEqual("You should input a valid value")
    });

    it("return a string error if value > 10", function() {

      expect(round.setRoll1(12)).toEqual("You should input a valid value")
    });
  });

  describe ("setRoll2", function() {
    it("set the roll2 value", function(){
      round.setRoll2(7)

      expect(round.roll2).toEqual(7);
    });
  });

  describe("setPlus", function() {
    it("check if a round has a strike", function(){
      round.roll1 = 10
      round.setPlus()

      expect(round.plus).toEqual("strike");
    });

    it("check if a round has a spare", function(){
      round.roll1 = 2
      round.roll2 = 8
      round.setPlus()

      expect(round.plus).toEqual("spare");
    });
  });

  describe("score", function(){
    it("calculate total of two rolls", function(){
      round.roll1 = 2
      round.roll2 = 5
      round.score()

      expect(round.currentScore).toEqual(7);
    });

    it("set the plus strike if total is 10", function() {
      round.roll1 = 10
      round.roll2 = 0
      round.score()

      expect(round.plus).toEqual("strike")
    });

    it("set the plus spare if total is 10", function() {
      round.roll1 = 8
      round.roll2 = 2
      round.score()

      expect(round.plus).toEqual("spare")
    });
  });
});
