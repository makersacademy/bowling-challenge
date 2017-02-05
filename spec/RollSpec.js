describe("Roll", function() {
  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  describe("#rollScore", function(){
    it("should record the score of a single roll", function(){
      roll.rollScore(6);
      expect(roll.score).toEqual(6);
    });
  });
});
