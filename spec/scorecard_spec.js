describe ('Scorecard', function() {

  var scorecard;
  var frame1;
  var frame2;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame1 = { number: 1, rolls: [], scores: [1,2] };
    frame2 = { number: 2, rolls: [], scores: [3,4] };
  });

  it ('initializes with an empty frames array', function() {
    expect(scorecard.getFrames()).toEqual ([]);
  });

  it ('stores frames', function() {
    scorecard.addFrame(frame1);
    expect(scorecard.getFrames()).toContain (frame1);
  });

  it ('calculates a running total of all frames', function() {
    scorecard.addFrame(frame1);
    scorecard.addFrame(frame2);
    expect(scorecard.totalScore()).toEqual(10);
  });

});
