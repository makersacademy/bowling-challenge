const Frame = require('./frame');

describe('Frame class unit test', () => {
  describe('constructor', () => { 
    it('initliases with empty array this.rolls', () => {
      frame = new Frame();
      expect(frame.rolls).toEqual([]);
    })

    it('initliases with bonus points & regular points values of 0', () => {
      frame = new Frame();
      expect(frame.bonusPoints).toEqual(0);
      expect(frame.regularPoints).toEqual(0);

    })
  });

  describe('.roll', () => { 
    it('adds roll score to this.rolls', () => {
      frame = new Frame();
      frame.roll(5);
      expect(frame.rolls[0]).toEqual(5);
      expect(frame.rolls.length).toEqual(1);
      frame.roll(5);
      expect(frame.regularPoints).toEqual(10);
      expect(frame.bonusPoints).toEqual(0);
    });

    it('refuses to add a roll if two have already been scored', () => {
      expect(() => {
        frame = new Frame();
        frame.roll(5);
        frame.roll(3);
        frame.roll(6)
      }).toThrow('Tried to add points to a frame that is already over');
    });

    it('refuses to add a roll if a strike was made on first roll=', () => {
      frame = new Frame();
      frame.roll(10);
      expect(() => frame.roll(6)).toThrow('Tried to add points to a frame that is already over');
      expect(frame.rolls).toEqual([10]);
    });

    it('returns error message if roll would exceed max score in a frame', () => {
      frame = new Frame();
      frame.roll(5);
      expect(() => frame.roll(7)).toThrow('Tried to add roll that would exceed max score in a frame (5 + 7');   
    }); 
  });

  it('takes an array of points for .play() and rolls for each one', () => {
    frame = new Frame();
    frame.play([5, 3]);
    expect(frame.regularPoints).toEqual(8)
  });

  describe('.isSpare()', () => {
    it('returns true when frame is a spare', () => {
      frame = new Frame();
      frame.play([5, 5]);
      expect(frame.isSpare()).toEqual(true);
    });

    it('returns true when frame is a spare with a 10 on 2nd roll', () => {
      frame = new Frame();
      frame.play([0, 10]);
      expect(frame.isSpare()).toEqual(true);
    });

    it('returns false when frame is a strike', () => {
      frame = new Frame();
      frame.play([10]);
      expect(frame.isSpare()).toEqual(false);
    });
  });

  describe('.isStrike()', () => {
    it('returns true when frame is a strike', () => {
      frame = new Frame();
      frame.play([10]);
      expect(frame.isStrike()).toEqual(true);
    });

    it('returns false when frame is a spare', () => {
      frame = new Frame();
      frame.play([2, 8]);
      expect(frame.isStrike()).toEqual(false);
    });
  });
});
