'use strict'

describe('features', function() {

  var scorecard;
  var frame;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame = new Frame();
  });



  describe('roll a frame and retrieve scores', function() {
    it('can return the result of a roll', function() {
      frame.rollOne(0);
      frame.rollTwo(0);
      scorecard.addFrame(frame);
      expect(scorecard.getFrames()[0].results[0]).toEqual(0);
      expect(scorecard.getFrames()[0].results[0]).toEqual(0);
    });
  });


  describe('display result: gutterball game - frame 1', function() {
    it('will display the correct total score for frame 1 for 2 gutterballs', function() {
      frame.rollOne(0);
      frame.rollTwo(0);
      scorecard.addFrame(frame);
      expect(scorecard.frameScoreDisplay()).toEqual(0);
    });
  });





});
