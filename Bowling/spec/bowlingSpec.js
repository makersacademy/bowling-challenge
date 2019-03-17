/* eslint-disable no-undef */
describe('Bowling Scorecard', () => {
  let bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });

  describe('Rules of ten-pin bowling', () => {
    it('a bowling game consists of 10 frames', () => {
      expect(bowling.framesArray.length).toEqual(10);
      expect(bowling.framesArray.every(frame => frame instanceof Frame)).toBeTruthy();
    });

    it('every Frame is numbered', () => {
      function frameCorrectlyNumbered(frame, index) {
        return frame.frameNumber === index + 1;
      }

      expect(bowling.framesArray.every(frameCorrectlyNumbered)).toBeTruthy();
    });

    it('can add the result of a roll to the scorecard', () => {
      const frameNumber = 1;
      const pinsDowned = 3;
      const arrayIndex = frameNumber - 1;
      const thisFrame = bowling.framesArray[arrayIndex];
      const rollsArray = thisFrame.rolls;

      bowling.addRoll({ frame: frameNumber, pinsDown: pinsDowned });

      expect(rollsArray.length).toEqual(1);
      expect(rollsArray[rollsArray.length - 1]).toEqual(pinsDowned);
    });

    it('knows if a frame was Strike', () => {
      bowling.addRoll({ frame: 10, pinsDown: 10 });
      expect(bowling.framesArray[9].isStrike()).toBeTruthy();
    });

    it('knows if a frame was Spare', () => {
      bowling.addRoll({ frame: 10, pinsDown: 6 });
      bowling.addRoll({ frame: 10, pinsDown: 4 });
      expect(bowling.framesArray[9].isSpare()).toBeTruthy();
    });

    it('Unless 10th frame: when 10 pins already down, can\'t record another roll on that frame', () => {
      const frame1Rolls = bowling.framesArray[0].rolls;
      const frame2Rolls = bowling.framesArray[1].rolls;

      // this is a strike:
      expect(frame1Rolls.length).toEqual(0);
      bowling.addRoll({ frame: 1, pinsDown: 10 });
      expect(frame1Rolls.length).toEqual(1);
      bowling.addRoll({ frame: 1, pinsDown: 3 });
      expect(frame1Rolls.length).toEqual(1);

      // this is a spare:
      expect(frame2Rolls.length).toEqual(0);
      bowling.addRoll({ frame: 2, pinsDown: 7 });
      expect(frame2Rolls.length).toEqual(1);
      bowling.addRoll({ frame: 2, pinsDown: 3 });
      expect(frame2Rolls.length).toEqual(2);
      bowling.addRoll({ frame: 2, pinsDown: 4 });
      expect(frame2Rolls.length).toEqual(2);
    });

    it('frames 1-9 allow maximum 2 rolls', () => {
      const frame3Rolls = bowling.framesArray[3].rolls;

      bowling.addRoll({ frame: 4, pinsDown: 2 });
      bowling.addRoll({ frame: 4, pinsDown: 4 });
      bowling.addRoll({ frame: 4, pinsDown: 3 });

      expect(frame3Rolls.length).toEqual(2);
    });

    it('frame 10 allows 3 rolls if frame is a Strike', () => {
      const frame10Rolls = bowling.framesArray[9].rolls;

      bowling.addRoll({ frame: 10, pinsDown: 10 });
      bowling.addRoll({ frame: 10, pinsDown: 10 });
      bowling.addRoll({ frame: 10, pinsDown: 10 });
      bowling.addRoll({ frame: 10, pinsDown: 10 });
      expect(frame10Rolls.length).toEqual(3);
    });

    it('frame 10 allows 3 rolls if frame is a Spare', () => {
      const frame10Rolls = bowling.framesArray[9].rolls;

      bowling.addRoll({ frame: 10, pinsDown: 6 });
      bowling.addRoll({ frame: 10, pinsDown: 4 });
      bowling.addRoll({ frame: 10, pinsDown: 10 });
      bowling.addRoll({ frame: 10, pinsDown: 10 });
      expect(frame10Rolls.length).toEqual(3);
    });

    xit('WORK IN PROGRESS: able to addRoll by just supplying pinsDowned', () => {
    });
  });

  describe('Scoring', () => {
    it('strikes are scored correctly', () => {
      bowling.addRoll({ frame: 1, pinsDown: 10 });

      expect(bowling.framesArray[0].frameScore).toEqual(10);

      bowling.addRoll({ frame: 2, pinsDown: 10 });
      bowling.addRoll({ frame: 3, pinsDown: 10 });

      expect(bowling.framesArray[0].isStrike()).toBeTruthy();
      expect(bowling.framesArray[0].frameScore).toEqual(30);
    });

    it('correctly scores 3 strikes in frame 10', () => {
      bowling.addRoll({ frame: 10, pinsDown: 10 });
      bowling.addRoll({ frame: 10, pinsDown: 10 });
      bowling.addRoll({ frame: 10, pinsDown: 10 });
      expect(bowling.framesArray[9].frameScore).toEqual(30);
    });

    it('spares are scored correctly', () => {
      bowling.addRoll({ frame: 4, pinsDown: 6 });
      bowling.addRoll({ frame: 4, pinsDown: 4 });
      bowling.addRoll({ frame: 4, pinsDown: 4 });
      bowling.addRoll({ frame: 5, pinsDown: 8 });
      expect(bowling.framesArray[3].frameScore).toEqual(18);
    });

    it('scores a perfect game correctly', () => {
      bowling.addRoll({ frame: 1, pinsDown: 10 });
      bowling.addRoll({ frame: 2, pinsDown: 10 });
      bowling.addRoll({ frame: 3, pinsDown: 10 });
      bowling.addRoll({ frame: 4, pinsDown: 10 });
      bowling.addRoll({ frame: 5, pinsDown: 10 });
      bowling.addRoll({ frame: 6, pinsDown: 10 });
      bowling.addRoll({ frame: 7, pinsDown: 10 });
      bowling.addRoll({ frame: 8, pinsDown: 10 });
      bowling.addRoll({ frame: 9, pinsDown: 10 });
      bowling.addRoll({ frame: 10, pinsDown: 10 });
      bowling.addRoll({ frame: 10, pinsDown: 10 });
      bowling.addRoll({ frame: 10, pinsDown: 10 });

      expect(bowling.totalScore()).toEqual(300);
    });

    it('scores a gutter game correctly', () => {
      bowling.addRoll({ frame: 1, pinsDown: 0 });
      bowling.addRoll({ frame: 1, pinsDown: 0 });
      bowling.addRoll({ frame: 2, pinsDown: 0 });
      bowling.addRoll({ frame: 2, pinsDown: 0 });
      bowling.addRoll({ frame: 3, pinsDown: 0 });
      bowling.addRoll({ frame: 3, pinsDown: 0 });
      bowling.addRoll({ frame: 4, pinsDown: 0 });
      bowling.addRoll({ frame: 4, pinsDown: 0 });
      bowling.addRoll({ frame: 5, pinsDown: 0 });
      bowling.addRoll({ frame: 5, pinsDown: 0 });
      bowling.addRoll({ frame: 6, pinsDown: 0 });
      bowling.addRoll({ frame: 6, pinsDown: 0 });
      bowling.addRoll({ frame: 7, pinsDown: 0 });
      bowling.addRoll({ frame: 7, pinsDown: 0 });
      bowling.addRoll({ frame: 8, pinsDown: 0 });
      bowling.addRoll({ frame: 8, pinsDown: 0 });
      bowling.addRoll({ frame: 9, pinsDown: 0 });
      bowling.addRoll({ frame: 9, pinsDown: 0 });
      bowling.addRoll({ frame: 10, pinsDown: 0 });
      bowling.addRoll({ frame: 10, pinsDown: 0 });
      expect(bowling.totalScore()).toEqual(0);
    });
  });
});
