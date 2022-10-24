describe('Frame', () => {
  let Frame = require('../../../app/public/js/Frame');
  let frame;
  let i;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('#store', () => {
    it('stores the value of a roll', () => {
      frame.store(2);
      expect(frame.getTotal()).toEqual(2);
    });

    describe('preventing excess rolls, accepting bonus rolls', () => {
      it('records two rolls, and errors if called a third time', () => {
        for (i = 0; i < 2; i++) {
          frame.store(2);
        }
        expect(() => {
          frame.store(2);
        }).toThrowError('All rolls and bonuses already recorded');
        expect(frame.getTotal()).toEqual(4);
      });

      it('records a spare, a bonus, and errors if called a fourth time', () => {
        for (i = 0; i < 3; i++) {
          frame.store(5);
        }
        expect(() => {
          frame.store(2);
        }).toThrowError('All rolls and bonuses already recorded');
        expect(frame.getTotal()).toEqual(15);
      });

      it('records a strike, two bonuses, and errors if called a fourth time', () => {
        for (i = 0; i < 3; i++) {
          frame.store(10);
        }
        expect(() => {
          frame.store(2);
        }).toThrowError('All rolls and bonuses already recorded');
        expect(frame.getTotal()).toEqual(30);
      });
    });

    describe('validating eligible rolls', () => {
      it('errors if the roll is greater than 10', () => {
        expect(() => {
          frame.store(11);
        }).toThrowError('Invalid score: please enter a number from 0 to 10');
      });

      it('errors if the rolls total (before bonuses) is greater than 10', () => {
        frame.store(6);
        expect(() => {
          frame.store(6);
        }).toThrowError('Total score for rolled balls cannot exceed 10');
      });
    });
  });

  describe('#getTotal', () => {
    it('returns the total of all rolls recorded in the frame', () => {
      for (i = 0; i < 2; i++) {
        frame.store(2);
      }
      expect(frame.getTotal()).toEqual(4);
    });

    it('when there is a spare, returns the total of all rolls and bonuses recorded in the frame', () => {
      for (i = 0; i < 3; i++) {
        frame.store(5);
      }
      expect(frame.getTotal()).toEqual(15);
    });

    it('when there is a strike, returns the total of all rolls and bonuses recorded in the frame', () => {
      for (i = 0; i < 3; i++) {
        frame.store(10);
      }
      expect(frame.getTotal()).toEqual(30);
    });
  });

  describe('#isComplete (all rolls and bonuses have been recorded)', () => {
    it('returns true when two rolls have been recorded and no bonus is due', () => {
      for (i = 0; i < 2; i++) {
        frame.store(2);
      }
      expect(frame.isComplete()).toEqual(true);
    });

    it('returns false when fewer than two rolls have been recorded', () => {
      expect(frame.isComplete()).toEqual(false);
      frame.store(2);
      expect(frame.isComplete()).toEqual(false);
    });

    it('returns false when two rolls have been recorded and a spare bonus is due', () => {
      for (i = 0; i < 2; i++) {
        frame.store(5);
      }
      expect(frame.isComplete()).toEqual(false);
    });

    it('returns true when two rolls and a spare bonus have been recorded', () => {
      for (i = 0; i < 3; i++) {
        frame.store(5);
      }
      expect(frame.isComplete()).toEqual(true);
    });

    it('returns false when a strike has been recorded and only one bonus has been recorded', () => {
      for (i = 0; i < 2; i++) {
        frame.store(10);
      }
      expect(frame.isComplete()).toEqual(false);
    });

    it('returns true when a strike and two bonus rolls have been recorded', () => {
      for (i = 0; i < 3; i++) {
        frame.store(10);
      }
      expect(frame.isComplete()).toEqual(true);
    });
  });

  describe('#isFull (all standard rolls have been made, though bonuses may be remaining)', () => {
    it('returns true when two rolls have been recorded', () => {
      for (i = 0; i < 2; i++) {
        frame.store(2);
      }
      expect(frame.isFull()).toEqual(true);
    });

    it('returns true when a strike has been recorded', () => {
      frame.store(10);
      expect(frame.isFull()).toEqual(true);
    });

    it('returns false when a roll less than 10 has been recorded', () => {
      expect(frame.isFull()).toEqual(false);
      frame.store(2);
      expect(frame.isFull()).toEqual(false);
    });
  });
});
