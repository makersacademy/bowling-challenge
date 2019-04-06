'use strict';

describe('Scorecard', function() {
  var scorecard;
  var frame;

  scorecard = new Scorecard();
  frame = new Frame();

  it('frames is empty as default', function() {
    expect(scorecard.frames.length).toEqual(0);
  });

  describe('#takeFrames', function() {
    it('accepts 10 frames', function() {
      for(var i=0; i < 10; i++){
        scorecard.takeFrames(frame)
      };
      expect(scorecard.frames.length).toEqual(10);
    });
  })

});
