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

      expect(() => { frame.roll(6); }).toThrowError('You cannot roll again. Start next frame!');
    });

    it('it checks if both rolls are stored for the current frame', () => {
      frame.roll(4);
      frame.roll(3);

      expect(frame.rolls).toEqual([{ roll: 4 }, { roll: 3 }]);
    });

    it('it checks if player can roll a 3rd ball in last frame after scoring spare', () => {
      frame.roll(5, true);
      frame.roll(5, true);
      frame.roll(5, true);

      expect(frame.rolls).toEqual([{ roll: 5 }, { roll: 5 }, { roll: 5 }]);
    });

    it('it checks if player can roll a 3rd ball in last frame after scoring strike', () => {
      frame.roll(10, true);
      frame.roll(10, true);
      frame.roll(10, true);

      expect(frame.rolls).toEqual([{ roll: 10 }, { roll: 10 }, { roll: 10 }]);
    });

    it('it prevents the player from rolling a 3rd ball in last frame if not strike or spare', () => {
      frame.roll(2, true);
      frame.roll(3, true);

      expect(() => { frame.roll(10, true); }).toThrowError("You can't roll an additional ball. Click on 'Final Score' to see your points!");
    });

    it('it prevents player from rolling a 4th ball in last frame if strike or spare', () => {
      frame.roll(10, true);
      frame.roll(5, true);
      frame.roll(5, true);

      expect(() => { frame.roll(10, true); }).toThrowError("You can't roll an additional ball. Click on 'Final Score' to see your points!");
    });

    describe('#isStrike', () => {
      it('it prevents player from rolling again if strike is scored', () => {
        frame.roll(10);

        expect(() => { frame.roll(3); }).toThrowError('You scored a strike. Start next frame!');
      });
    });

    describe('#calculateScore', () => {
      it('it sums the current score to calculate spare', () => {
        frame.roll(6);
        frame.roll(4);

        expect(frame.currentScore).toEqual(10);
      });

      it('it sums the correct score in last frame if spare is scored', () => {
        frame.roll(5, true);
        frame.roll(5, true);
        frame.roll(5, true);

        expect(frame.currentScore).toEqual(15);
      });

      it('it sums the correct score in last frame if strike is scored', () => {
        frame.roll(10, true);
        frame.roll(10, true);
        frame.roll(10, true);

        expect(frame.currentScore).toEqual(30);
      });
    });

    describe('#isSpare', () => {
      it('it sets the spare attribute to true if player scores a Spare', () => {
        frame.roll(6);
        frame.roll(4);

        expect(frame.spare).toBe(true);
      });
    });
  });
});
