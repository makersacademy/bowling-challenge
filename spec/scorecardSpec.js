'use strict';

describe('Scorecard', function() {
  let scorecard, frame, rolls = null;

  beforeEach(function() {
    frame = {
      number: 1,
      addRoll: function(roll) { rolls = [roll] },
      scoreFrame: function() { return 8; },
      isComplete: function() { return false; }
    }
    spyOn(frame, 'addRoll');

    scorecard = new Scorecard([frame]);
  });

  describe('#addRoll(pins)', function() {
    it('sends a request to the current frame to add the roll', function() {
      scorecard.addRoll(3);
      expect(frame.addRoll).toHaveBeenCalled();
    })

    it('does not change frame if the current one is incomplete', function() {
      scorecard.addRoll(3);
      expect(scorecard._currentFrame().number).toEqual(1);
    })

    it('moves to the next frame if the current one is complete', function() {
      frame = {
        number: 1,
        addRoll: function() { return true; },
        isComplete: function() { return true; }
      }
      scorecard = new Scorecard([frame]);
      scorecard.addRoll(5);
      expect(scorecard._currentFrame().number).toEqual(2);
    })
  })

  describe('#calcRunningScore(frameNumber)', function() {
    it('returns the total score of frames up to the given number', function() {
      scorecard = new Scorecard([frame, frame, frame, frame, frame, frame])
      expect(scorecard.calcRunningScore(6)).toEqual(48);
    })

    it('returns false if the running score cannot be calculated due to insufficient rolls', function() {
      let frame5 = {
        number: 5,
        scoreFrame: function() { return false; }
      }
      scorecard = new Scorecard([frame, frame, frame, frame, frame5])
      expect(scorecard.calcRunningScore(5)).toEqual(false);
    })
  })
});
