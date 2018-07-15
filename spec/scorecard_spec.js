describe ('Scorecard', function() {

  var scorecard;
  var frame1;
  var frame2;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it ('initializes with an empty frames array', function() {
    expect(scorecard.getFrames()).toEqual ([]);
  });

  it ('stores frames', function() {
    scorecard.addFrame(frame1);
    expect(scorecard.getFrames()).toContain (frame1);
  });

  it ('calculates a running total of all frame scores', function() {
    frame1 = new Frame (1);
    frame2 = new Frame (2);
    scorecard.addFrame(frame1);
    scorecard.addFrame(frame2);
    frame1.addScore(3);
    frame2.addScore(7);
    expect(scorecard.totalScore()).toEqual (10);
  });

});
