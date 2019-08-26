describe('Frame', () => {
    
  var Frame = require('../lib/frame');
  var frame;

  var rand = (a, b) => {
    return Math.floor((Math.random() * (b-a)) + a);
  }

  describe('any frame', () => {
    
    beforeEach( () => {
      frame = new Frame(rand(1, 11));
    });

    describe('.getScore', () => {

      it('should start with a score of 0', () => {
        expect(frame.getScore()).toEqual(0);
      });
      
      it('should return its score', () => {
        frame.roll(5);
        frame.roll(2);
        expect(frame.getScore()).toEqual(7);
      });

    });
  });

  describe('frames 1 to 9', () => {

    beforeEach( () => {
      frame = new Frame(rand(1, 10));
    });
    
    describe('.roll', () => {

      it('should not allow for a third roll', () => {
        frame.roll(5);
        frame.roll(2);
        expect(() => {frame.roll(4)}).toThrow("No more rolls for this frame");
      });

      it('sets isStrike to true, and bonusRolls to 2 if first roll is 10', () => {
        frame.roll(10);
        expect(frame.isStrike).toBe(true);
        expect(frame.bonusRolls).toEqual(2);
      });

      it('sets isSpare to true, and bonusRolls to 1 if total score is 10', () => {
        frame.roll(2);
        frame.roll(8);
        expect(frame.isSpare).toBe(true);
        expect(frame.bonusRolls).toEqual(1);
      });

    });

    describe('isComplete', () => {

      it('should return false with no rolls', () => {
        expect(frame.isComplete()).toBe(false);
      });

      it('should return false with a non-strike roll', () => {
        frame.roll(5)
        expect(frame.isComplete()).toBe(false);
      });

      it('should return true after a spare', () => {
        frame.roll(5)
        frame.roll(5)
        expect(frame.isComplete()).toBe(true);
      });
      
      it('should return true after a strike', () => {
        frame.roll(10);
        expect(frame.isComplete()).toBe(true);
      });
      
    });
  });

  describe('frame 10', () => {
    
    beforeEach( () => {
      frame = new Frame(10);
    });

    it('should allow 2 bonus rolls if strike', () => {
      frame.roll(10);
      expect(() => {frame.roll(10)}).not.toThrow();
      expect(() => {frame.roll(10)}).not.toThrow();
      expect(() => {frame.roll(10)}).toThrow("No more rolls for this frame");
    });

    it('should allow 1 bonus roll if spare', () => {
      frame.roll(5);
      frame.roll(5);
      expect(() => {frame.roll(10)}).not.toThrow();
      expect(() => {frame.roll(10)}).toThrow("No more rolls for this frame");
    });

  });
  
});