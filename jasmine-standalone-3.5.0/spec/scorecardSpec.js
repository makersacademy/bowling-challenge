describe('Scorecard', function () {

  beforeEach(function () {
    scorecard = new Scorecard();
  });

  it('starts with a score of 0', function () {
    expect(scorecard.score).toEqual(0);
  });

  it('starts with a player', function () {
    expect(scorecard.player).toEqual(1);
  });

  it('starts with 10 frames', function () {
    expect(scorecard.frames).toEqual(10);
  });

  it('starts with 10 pins', function () {
    expect(scorecard.pins).toEqual(10)
  });
});

describe('records roll', function () {

  it('records results of roll', function() {
    scorecard.rollResult(1);
    expect(scorecard.pins).toEqual(9)
  });
});
