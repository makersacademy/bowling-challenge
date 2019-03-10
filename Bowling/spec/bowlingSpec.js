/* eslint-disable no-undef */
describe('Bowling Scorecard', () => {
  let bowling;
  let framesArray;

  beforeEach(() => {
    bowling = new Bowling();
    framesArray = bowling.frames;
  });

  it('.totalScore tracks total score, and starts at 0', () => {
    expect(bowling.totalScore).toEqual(0);
  });

  it('a bowling game consists of 10 frames', () => {
    expect(framesArray.length).toEqual(10);
    expect(framesArray.every(frame => frame instanceof Frame)).toBeTruthy();
  });

  it('every Frame is numbered', () => {
    function frameCorrectlyNumbered(frame, index) {
      return frame.frameNumber === index + 1;
    }

    expect(framesArray.every(frameCorrectlyNumbered)).toBeTruthy();
  });

  it('can add the result of a roll to the scorecard', () => {
    const frameNumber = 1;
    const pinsDowned = 3;
    const arrayIndex = frameNumber - 1;
    const thisFrame = framesArray[arrayIndex];
    const rollsArray = thisFrame.rolls;

    bowling.addRoll({ frame: frameNumber, pinsDown: pinsDowned });

    expect(rollsArray.length).toEqual(1);
    expect(rollsArray[rollsArray.length - 1]).toEqual(pinsDowned);
  });

  it('when 10 pins already down, can\'t record another roll on that frame', () => {
    const f1RollsArray = framesArray[0].rolls;
    const f2RollsArray = framesArray[1].rolls;

    // this is a strike:
    expect(f1RollsArray.length).toEqual(0);
    bowling.addRoll({ frame: 1, pinsDown: 10 });
    expect(f1RollsArray.length).toEqual(1);
    bowling.addRoll({ frame: 1, pinsDown: 3 });
    expect(f1RollsArray.length).toEqual(1);

    // this is a spare:
    expect(f2RollsArray.length).toEqual(0);
    bowling.addRoll({ frame: 2, pinsDown: 7 });
    expect(f2RollsArray.length).toEqual(1);
    bowling.addRoll({ frame: 2, pinsDown: 3 });
    expect(f2RollsArray.length).toEqual(2);
    bowling.addRoll({ frame: 2, pinsDown: 4 });
    expect(f2RollsArray.length).toEqual(2);
  });

  it('know that knocking over all 10 pins of a frame in 2 rolls is a "spare"', () => {
    bowling.addRoll({ frame: 1, pinsDown: 9 });
    bowling.addRoll({ frame: 1, pinsDown: 9 });
  });
});
