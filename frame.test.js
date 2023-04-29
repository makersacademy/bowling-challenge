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

    it('initliases with a boolean arg indicating whether it is the final frame', () => {
      frame = new Frame(false);
      expect(frame.isFinalFrame).toEqual(false);
      frame = new Frame();
      expect(frame.isFinalFrame).toEqual(false);
      frame = new Frame(true);
      expect(frame.isFinalFrame).toEqual(true);
    });
  });

  describe('.roll', () => { 
    describe('in non-final frame', () => {
      it('adds roll score to this.rolls', () => {
        frame = new Frame();
        frame.roll(5);
        expect(frame.rolls[0]).toEqual(5);
        expect(frame.rolls.length).toEqual(1);
      });

      it('refuses to add a roll if two have already been scored', () => {
        frame = new Frame();
        frame.roll(5);
        frame.roll(3);
        expect(frame.roll(6)).toEqual('Frame is over');
        expect(frame.rolls).toEqual([5, 3]);
      });

      it('returns error message given an invalid roll score', () => {
        frame = new Frame();
        expect(frame.roll(13)).toEqual('Invalid roll score');
        expect(frame.roll(-5)).toEqual('Invalid roll score');
        frame.roll(5);
        expect(frame.roll(7)).toEqual('Invalid roll score');   
      });

      it('ends the frame early if player gets a strike on first shot', () => {
        frame = new Frame();
        frame.roll(10);
        expect(frame.roll(5)).toEqual('Frame is over');
        expect(frame.rolls).toEqual([10, 0]); 
      });
    });
  });
});
