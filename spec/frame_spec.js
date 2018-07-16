describe ('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it ('stores in-frame and bonus scores', function() {
    frame.addScore(3);
    frame.addScore(5);
    expect(frame.scores).toEqual ([3, 5]);
  });

  it ('returns the total score for the frame', function() {
    frame.addScore(3);
    frame.addScore(5);
    expect(frame.totalFrameScore()).toEqual (8);
  });

  describe ('.isSpare', function() {
    describe ('When the player rolls a spare', function() {
      it ('returns true', function() {
        frame.addScore(5);
        frame.addScore(5);
        expect(frame.isSpare()).toEqual (true);
      });
    });
  });

  describe ('.isStrike', function() {
    describe ('When the player rolls a strike', function() {
      it ('returns true', function() {
        frame.addScore(10);
        expect(frame.isStrike()).toEqual (true);
      });
    });
  });

});
