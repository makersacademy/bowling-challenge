describe("Turns", function () {
  var turn;

  beforeEach(function () {
    turn = new Turn();
  });

  it("should be a strike if the first ball is 10", function() {
    turn._throws = [10]
    expect(turn.isAStrike()).toBe(true)
  });

  it("should be a spare if the two balls equal 10", function() {
    turn._throws = [6,4]
    expect(turn.isASpare()).toBe(true)
  });

  it("should provide a total score in a non-special case", function() {
    turn._throws = [6,3]
    expect(turn.totalScore()).toBe(9)
  });

  it("should provide a total score in a special case", function() {
    turn._throws = [6,4,4]
    expect(turn.totalScore()).toBe(14)
  });

  it("should record the result of a turn", function() {
    turn.logThrow(5);
    expect(turn._throws).toEqual([5])
  });

  it("should be over after 2 throws in the normal case", function() {
    turn.logThrow(5);
    turn.logThrow(4);
    expect(turn.isTurnOver()).toEqual(true)
  });

  it("should be over after 3 throws in the special case", function() {
    turn.logThrow(5);
    turn.logThrow(5);
    turn.logThrow(1);
    expect(turn.isTurnOver()).toEqual(true)
  });
});
