describe('Features', function () {
  var scorecard;
  beforeEach(function() {
    scorecard = new ScoreCard();
  });

  it('scorecard total starts at 0', function () {
    expect(scorecard.totalScore).toEqual(0);
  })
})

describe('Unit tests', function () {
  var scorecard;
  beforeEach(function() {
    scorecard = new ScoreCard();
    frame1 = new Frame();
  });
  it('frames can be generated and hold a score', function () {
    expect(frame1.score).toEqual(0);
  })
})
