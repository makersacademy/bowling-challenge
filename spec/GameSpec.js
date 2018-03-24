describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should have an inital score of 0", function() {
    expect(game._score).toEqual(0);
  });
});




describe("Frame", function() {
  var frame;
  var round;

  beforeEach(function() {
    frame = new Frame();
    // TODO How can I fake this and it's tests?
    round = new Round();
  });

  it("should have an inital frame score of 0", function() {
    expect(frame._score).toEqual(0);
  });

  it("should NOT be a last round frame unless specified", function() {
    expect(frame._isLastRoundFrame).toEqual(false)

    frame = new Frame(true);
    expect(frame._isLastRoundFrame).toEqual(true);
  });

  it("should have two rounds if NOT a last round frame", function() {
    expect(frame._rounds).toEqual([round, round])
  });

  it ("should have three rounds if frame is specified as a last round frame", function() {
    frame = new Frame(true);

    expect(frame._rounds).toEqual([round, round, round]);
  });
});





describe("Round", function() {
  var round;

  beforeEach(function() {
    round = new Round();
  });

  it("should have an inital score of 0", function() {
    expect(round._score).toEqual(0);
  });
});
