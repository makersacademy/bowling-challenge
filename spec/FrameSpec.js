describe('frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('#attr reader functions', function() {
    it('should start with 0 for roll 1', function() {
      expect(frame.roll_1()).toEqual(0);
    })
    it('should start with 0 for roll 2', function() {
      expect(frame.roll_2()).toEqual(0);
    })
    it('should start with 0 for bonus roll', function() {
      expect(frame.bonus_Roll()).toEqual(0);
    })
    it('should start with 0 for frame score', function() {
      expect(frame.frame_Score()).toEqual(0);
    })
    it('should start with 1 for frame number', function() {
      expect(frame.Number()).toEqual(1);
    })
  })

  describe('#Next', function() {
    it('goes to the next frame', function() {
      frame.Next();
      expect(frame.Number()).toEqual(2);
    })
  })

  describe('#isStrike', function() {
    it('tells us if it is a strike', function() {
      frame.roll1 = 10;
      expect(frame.isStrike()).toEqual(true);
    })

    it('tells us if it is not a strike', function() {
      expect(frame.isStrike()).toEqual(false);
    })
  })

  describe('#isSpare', function() {
    it('tells us if it is a spare', function() {
      frame.frame_score  = 10;
      expect(frame.isSpare()).toEqual(true);
    })
    it('tells us if it is not a strike', function() {
      expect(frame.isSpare()).toEqual(false);
    })
  })

  describe('#AddRoll2', function() {
    it('adds your score to the roll1', function() {
      frame.AddRoll1(3);
      expect(frame.roll_1()).toEqual(3);
    })

    it('adds your score to the frame score', function() {
      frame.AddRoll1(3);
      expect(frame.frame_Score()).toEqual(3);
    })
  })

  describe('#AddRoll2', function() {
    it('adds your score to the roll2', function() {
      frame.AddRoll2(4);
      expect(frame.roll_2()).toEqual(4);
    })

    it('adds your score to the frame score', function() {
      frame.AddRoll1(3);
      frame.AddRoll2(4);
      expect(frame.frame_Score()).toEqual(7);
    })
  })

  describe('#AddBonusRoll', function() {
    it('adds your score to the bonus roll', function() {
      frame.AddBonusRoll(5);
      expect(frame.bonus_Roll()).toEqual(5);
    })

    it('adds your score to the frame score', function() {
      frame.AddRoll1(10);
      frame.AddRoll2(4);
      frame.AddBonusRoll(3);
      expect(frame.frame_Score()).toEqual(17);
    })
  })

  describe('#isFinished', function() {
    it('tells us if the frame is done', function() {
      frame.AddRoll1(1);
      frame.AddRoll2(3);
      expect(frame.isFinished()).toEqual(true);
    })
  })
})
