describe("Roll", function () {
  var roll;

  beforeEach(function() {
    roll = new Roll();
  });

  it('should return the number of pins knocked down in a roll', function() {
    roll.pins(5)
    expect(roll.score).toEqual(5)
  });

});
