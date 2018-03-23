describe('Frame', () => {
  let frame;
  let lastFrame;

  beforeEach(() => {
    frame = new Frame();
    lastFrame = new Frame(10);
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
      lastFrame.roll(5);
      lastFrame.roll(5);
      lastFrame.roll(5);

      expect(lastFrame.rolls).toEqual([{ roll: 5 }, { roll: 5 }, { roll: 5 }]);
    });

    it('it checks if player can roll a 3rd ball in last frame after scoring strike', () => {
      lastFrame.roll(10);
      lastFrame.roll(10);
      lastFrame.roll(10);

      expect(lastFrame.rolls).toEqual([{ roll: 10 }, { roll: 10 }, { roll: 10 }]);
    });

    it('it prevents the player from rolling a 3rd ball in last frame if not strike or spare', () => {
      lastFrame.roll(2);
      lastFrame.roll(3);

      expect(() => { lastFrame.roll(10); }).toThrowError('The game is over!');
    });

    it('it prevents player from rolling a 4th ball in last frame if strike or spare', () => {
      lastFrame.roll(10);
      lastFrame.roll(5);
      lastFrame.roll(5);

      expect(() => { lastFrame.roll(10); }).toThrowError('The game is over!');
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
        lastFrame.roll(5);
        lastFrame.roll(5);
        lastFrame.roll(5);

        expect(lastFrame.currentScore).toEqual(15);
      });

      it('it sums the correct score in last frame if strike is scored', () => {
        lastFrame.roll(10);
        lastFrame.roll(10);
        lastFrame.roll(10);

        expect(lastFrame.currentScore).toEqual(30);
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
