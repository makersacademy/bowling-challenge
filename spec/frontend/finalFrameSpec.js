const FinalFrame = require('../../src/finalFrame');

describe('FinalFrame', () => {
  const testFinalFrame = new FinalFrame();

  it('can keep track o up to three rolls', () => {
    testFinalFrame.setRollOne(5);
    testFinalFrame.setRollTwo(5);
    testFinalFrame.setRollThree(6);

    expect(testFinalFrame.getScore()).toBe(16);
  });
});
