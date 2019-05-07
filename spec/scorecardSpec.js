describe('Scorecard', function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("should start with a total score of 0", function() {
    expect(scorecard.showTotal()).toEqual(0)
  });

  it("increases total score as rolls are added", function() {
    scorecard.firstRoll(5);
    scorecard.secondRoll(5);
    scorecard.firstRoll(5);
    expect(scorecard.showTotal()).toEqual(20)
  });

  it("increases frame number after strike", function() {
    scorecard.firstRoll(10);
    expect(scorecard.showFrame()).toEqual(1)
  });

  it("increases frame number after two rolls", function() {
    scorecard.firstRoll(5);
    scorecard.secondRoll(5);
    expect(scorecard.showFrame()).toEqual(1)
  });

  it("does not increase frame number after only one roll (no strike)", function() {
    scorecard.firstRoll(5);
    expect(scorecard.showFrame()).toEqual(0)
  });

  it("starts with an empty score array", function() {
    expect(scorecard.showRolls()).toEqual([])
  });

  it("adds 10 to the rolls array after a strike", function() {
    scorecard.firstRoll(10);
    expect(scorecard.showRolls()).toEqual([10])
  });

  it("adds score from first and second roll to the rolls array", function() {
    scorecard.firstRoll(5);
    scorecard.secondRoll(5);
    expect(scorecard.showRolls()).toEqual([5,5])
  });

  it("adds a strike bonus when player gets a strike", function() {
    scorecard.firstRoll(10);
    scorecard.firstRoll(4);
    scorecard.secondRoll(4);
    expect(scorecard.showTotal()).toEqual(26)
  });

  it("adds both a strike and spare bonus", function() {
    scorecard.firstRoll(10);
    scorecard.firstRoll(5);
    scorecard.secondRoll(5);
    scorecard.firstRoll(4);
    scorecard.secondRoll(4);
    expect(scorecard.showTotal()).toEqual(42)
  });

  it("throws an error when the game is complete with no bonuses (frame number equals 10)", function() {
    for (var i = 0; i < 10; i++) {
      scorecard.firstRoll(2);
      scorecard.secondRoll(2);
    }
    expect(function(){ scorecard.firstRoll(5);}).toThrowError("Unable to add new rolls; the game has finished.");
  });

  it("throws an error when the score input is larger than 10", function() {
    expect(function(){ scorecard.firstRoll(11);}).toThrowError("Score must be below 10.");
  });
});
