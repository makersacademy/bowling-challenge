describe("Round", function(){

  beforeEach(function(){
    round = new Round();
  });

  describe("setRoll", function() {
    it("set the first roll value", function(){
      round.setRoll(7)

      expect(round.roll1).toEqual(7);
    });

    it("set the second roll value", function(){
      round.countRoll()
      round.setRoll(7)

      expect(round.roll2).toEqual(7);
    });

    it("set the third roll value", function(){
      round.countRoll()
      round.countRoll()
      round.setRoll(7)

      expect(round.roll3).toEqual(7);
    });

    it("return a string error if value < 0", function() {

      expect(round.setRoll(-1)).toEqual("Something went wrong")
    });

    it("return a string error if value > 10", function() {

      expect(round.setRoll(12)).toEqual("Something went wrong")
    });
  });

  // describe ("setRoll2", function() {
  //   it("set the roll2 value", function(){
  //     round.setRoll2(7)
  //
  //     expect(round.roll2).toEqual(7);
  //   });
  // });
  //
  // describe ("setRoll3", function() {
  //   it("set the roll3 value", function(){
  //     round.setRoll3(7)
  //
  //     expect(round.roll3).toEqual(7);
  //   });
  // });

  describe("setPlus", function() {
    it("check if a round has a strike", function(){
      round.setRoll(10)
      round.setPlus()

      expect(round.plus).toEqual("strike");
    });

    it("check if a round has a spare", function(){
      round.setRoll(2)
      round.countRoll()
      round.setRoll(8)

      round.setPlus()

      expect(round.plus).toEqual("spare");
    });
  });

  describe("score", function(){
    it("calculate total of rolls", function(){
      round.setRoll(2)
      round.countRoll()
      round.setRoll(5)

      round.score()

      expect(round.currentScore).toEqual(7);
    });

    it("set the plus strike if total is 10", function() {
      round.setRoll(10)

      round.score()

      expect(round.plus).toEqual("strike")
    });

    it("set the plus spare if total is 10", function() {
      round.setRoll(8)
      round.countRoll()
      round.setRoll(2)

      round.score()

      expect(round.plus).toEqual("spare")
    });
  });
});
