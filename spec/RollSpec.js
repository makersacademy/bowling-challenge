describe("Roll", function() {
  var roll;

  beforeEach(function() {
    roll = new Roll(6);
  });

  it("should record the score of a roll", function(){
      expect(roll.score).toEqual(6);
  });
});
