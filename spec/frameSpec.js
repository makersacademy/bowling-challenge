describe('Frame', () => {
  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('#initialize', () => {
    it('it checks that there are 10 pins when frame is initialized', () => {
      expect(frame.pins.length).toEqual(10);
    });
  });

  describe('#roll', () => {
    it('it does a roll and the returned value is the number of pins knocked', () => {
      expect(frame.roll(6)).toEqual(6);
    });

    it('it throws an error if player tries to roll more than twice', () => {
      frame.roll(4);
      frame.roll(3);

      expect(() => { frame.roll(6); }).toThrow('You cannot roll again. Start next frame!');
    });

    it('it checks if both rolls are stored for the current frame', () => {
      frame.roll(4);
      frame.roll(3);

      expect(frame.rolls).toEqual([{ roll: 4 }, { roll: 3 }]);
    });

    describe('#_isStrike', () => {
      it('it prevents player from rolling again if strike is scored', () => {
        frame.roll(10);

        expect(() => { frame.roll(3); }).toThrow('You scored a strike. Start next frame!');
      });
    });

    describe('#_calculateScore', () => {
      it('it sums the current score to calculate spare', () => {
        frame.roll(6);
        frame.roll(4);

        expect(frame.currentScore).toEqual(10);
      });
    });

    describe('#_isSpare', () => {
      it('it sets the spare attribute to true if player scores a Spare', () => {
        frame.roll(6);
        frame.roll(4);

        expect(frame.spare).toBe(true);
      });
    });
  });
});
