describe("Turn", function() {
  var turn;
  var turnTwo;

  beforeEach(function() {
    turn = new Turn(0);
    turnTwo = new Turn(4);
  });

  it("should initialize with a max pins of 10", function() {
    expect(turn.MAX_PINS).toEqual(10)
  });

  it("should initialize with a status of 'in progress'", function() {
    expect(turn.status).toEqual("in progress")
  });

  it("should initialize with 1 roll complete", function() {
    expect(turn._rollsComplete).toEqual(1)
  });

  it("should initialize with a set number of pins down for the first roll", function() {
    expect(turnTwo._rollOnePinsDown).toEqual(4)
  });

});
