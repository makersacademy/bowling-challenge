describe("frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("shows us the score of the frame", function() {
    expect(frame.viewScore()).toEqual(0);
  });

  it("shows us the score of a gutter frame", function() {
    frame.gutter()
    expect(frame.viewScore()).toEqual(0);
  });

  it("shows us the score of a strike frame", function() {
    frame.strike()
    expect(frame.viewScore()).toEqual(10);
  });

  it("shows us the score of two rolls which are not a spare", function() {
    frame.roll1(3)
    frame.roll2(5)
    expect(frame.viewScore()).toEqual(8);
  });

  it("if the bowler's choice is more than 9 or less than 0", function() {
    expect(function() {
      frame.roll1(10);
    }).toThrowError("Cannot exceed 9, if you want to score 10 please use strike function");
  });

  it("if the bowler's choice is more than 10 when rolls are added", function() {
    expect(function() {
      frame.roll1(7);
      frame.roll2(4);
    }).toThrowError("Cannot exceed 10 in two rolls");
  });

});
