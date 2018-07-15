describe ('Scorecard', function() {

  var scorecard;
  var frame1;
  var frame2;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it ('initializes with an array of 10 frames', function() {
    expect(scorecard.frames.length).toEqual (10);
  });

  it ('calculates a running total of all frame scores', function() {
    scorecard.addScore(1, 3)
    scorecard.addScore(2, 4)
    expect(scorecard.totalScore()).toEqual (7);
  });

  it ('adds a score to the correct frame', function() {
    var frame = 1;
    var score = 5
    scorecard.addScore(frame, score)
    expect(scorecard.frames[(frame - 1)].totalScore()).toEqual (5);
  });

});
