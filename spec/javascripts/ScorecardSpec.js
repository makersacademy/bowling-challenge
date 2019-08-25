describe('Scorecard', function () {
  beforeEach(function () {
    scorecard = new Scorecard();
  });

  it('starts with empty rolls', function () {
    expect(scorecard.rolls).toEqual([])
  });

  it('adds a roll to the rolls', function () {
    scorecard.add_roll(5);
    expect(scorecard.rolls).toEqual([5])
    scorecard.add_roll(5);
    expect(scorecard.rolls).toEqual([5, 5])
    scorecard.add_roll(10);
    expect(scorecard.rolls).toEqual([5, 5, 10, null])
  });

  it('reports the frames so far', function () {
    scorecard.add_roll(5);
    expect(scorecard.frames()).toEqual([5])
    scorecard.add_roll(5);
    expect(scorecard.frames()).toEqual([10])
  });

  it('calculates spare bonuses', function () {
    scorecard.add_roll(5);
    scorecard.add_roll(5);
    scorecard.add_roll(5);
    expect(scorecard.frames()).toEqual([15, 5])
  });




});