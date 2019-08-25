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
    expect(scorecard.rolls).toEqual([5, '/'])
    scorecard.add_roll(10);
    expect(scorecard.rolls).toEqual([5, '/', 'X'])
    scorecard.add_roll('X');
    expect(scorecard.rolls).toEqual([5, '/', 'X', 'X'])
  });

});