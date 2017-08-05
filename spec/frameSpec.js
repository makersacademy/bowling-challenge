describe("Frame", function () {
  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  it("contains values for two rolls", function() {
    expect(frame).toEqual(jasmine.objectContaining({
      _roll1: 0,
      _roll2: 0
    }));
  });

  it("calculates the score for each roll", function () {
    frame.firstRoll(5);
    frame.secondRoll(1);
    expect(frame.getScore()).toEqual(6);
  });
});
