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

  it('can add the result of a roll to the score card', () => {
    const frameNumber = 1;
    const pinsDowned = 3;
    const arrayIndex = frameNumber - 1;
    const thisFrame = framesArray[arrayIndex];
    const rollsArray = thisFrame.rolls;

    bowling.addRoll({ frame: frameNumber, pinsDown: pinsDowned });

    expect(rollsArray.length).toEqual(1);
    expect(rollsArray[rollsArray.length - 1]).toEqual(pinsDowned);
  });

  it('if previous roll was a "strike", prevent another roll on this frame', () => {

  });
});
