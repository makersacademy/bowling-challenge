'use strict';

describe('Scorecard', function() {
  let scorecard, frame, rolls = null;

  beforeEach(function() {
    frame = {
      number: 1,
      addRoll: function(roll) { rolls = [roll] },
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

  

  // describe('calculateScore', function() {
  //   it('returns 0 for a game of 20 gutter balls (0 pins)', function() {
  //     for(let i = 0; i < 20; i++){
  //       scorecard.addRoll(0);
  //     }
  //     expect(scorecard.calculateScore()).toEqual(0)
  //   });
  //
  //   it('returns 20 for a game of 20 rolls that knocked down 1 pin each', function() {
  //     for(let i = 0; i < 20; i++){
  //       scorecard.addRoll(1);
  //     }
  //     expect(scorecard.calculateScore()).toEqual(20)
  //   });
  // });
});
