describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it("should start at 0", function() {
    // var bowling = new Bowling();
    expect(bowling.score).toEqual(0);
  });
});
