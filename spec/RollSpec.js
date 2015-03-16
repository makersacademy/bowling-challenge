describe("Roll", function() {

  var roll;

  beforeEach(function () {
    roll = new Roll(6);
  });

  it("Is initialized with its score, in this case '6'", function() {
    expect(roll.score).toEqual(6);
  });

});