describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  describe('#record', function() {
    it('records a player\'s rolls', function() {
      frame.record(1,5);
      expect(frame.rolls).toEqual([1, 5]);
    });
  });

  describe('#calculateScore', function() {
    it('calculates the score of a frame', function() {
      frame.record(1,5);
      frame.calculateScore();
      expect(frame.score).toEqual(6);
    });

    it('calculates the 10th frame correctly if 3rd roll is played', function() {
      frame.record(1,5);
      frame.calculateScore();
      frame.addThirdRoll(6);
      expect(frame.score).toEqual(1+5+6);
    })
  })

  describe('#addThirdRoll', function() {
    it('adds third roll to record', function() {
      frame.record(1,5);
      frame.calculateScore();
      frame.addThirdRoll(6);
      expect(frame.rolls[2]).toEqual(6);
    });
  });

  describe('#addBonus', function() {
    it('adds correct bonus to the total score after a strike has been scored',
     function() {
      frame.record(10,0);
      frame.calculateScore();
      frame.addBonus(10, 3);
      expect(frame.score).toEqual(10+0+10+3);
    });

    it('adds correct bonus to the total score after a spare has been scored',
     function() {
       frame.record(3,7);
       frame.calculateScore();
       frame.addBonus(5);
       expect(frame.score).toEqual(3+7+5);
    });
  });

});
