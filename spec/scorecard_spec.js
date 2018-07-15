describe ('Scorecard', function() {

  var scorecard = new Scorecard();

  it ('initializes with an empty frames array', function() {
    expect(scorecard.getFrames()).toEqual ([]);
  });

  it ('stores frames', function() {
    var frame = new Frame(1);
    scorecard.addFrame(frame);
    expect(scorecard.getFrames).toContain (frame);
  });

});
