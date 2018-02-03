describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
    lastFrame = new Frame(true);
  });

  it("should be able to indicate whether it's not yet complete", function() {
    expect(frame.isComplete()).toEqual(false);
  });

  it("should be able count how many balls are left", function() {
    expect(frame.ballsRemaining()).toEqual(2);
  });

  it("should decrement how many balls are left when a ball is played", function() {
    frame.play();
    expect(frame.ballsRemaining()).toEqual(1);
  });

  it("should be complete after two games if not last game", function() {
    frame.play();
    frame.play();
    expect(frame.isComplete()).toEqual(true);
  });

  it("should be able to set a frame as the last one", function() {
    expect(lastFrame.lastFrame()).toEqual(true);
  });

  it("should be a strike if 10 or X with 2 balls left", function() {
    expect(frame.isStrike("X")).toEqual(true);
    expect(frame.isStrike(10)).toEqual(true);
  });

  it("shouldn't be a strike if <2 balls left", function() {
    frame.play();
    expect(frame.isStrike(10)).toEqual(false);
  });

  it("should be a spare if / with 1 ball left", function() {
    frame.play();
    expect(frame.isSpare("/")).toEqual(true);
  });

  it("should be a spare if score is 10 with 1 ball left", function() {
    frame.play(7);
    expect(frame.isSpare(3)).toEqual(true);
  });

  it("should set bonus balls to two if a strike - X", function() {
    frame.play("X");
    expect(frame.bonusBalls()).toEqual(2);
  });

  it("should set bonus balls to two if a strike - 10", function() {
    frame.play("X");
    expect(frame.bonusBalls()).toEqual(2);
  });

});
