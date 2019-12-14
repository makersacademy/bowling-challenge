const FinalFrame = require('../../public/js/finalFrame');

describe('FinalFrame', () => {
  let testFinalFrame = new FinalFrame();

  beforeEach(() => {
    testFinalFrame = new FinalFrame();
  });

  it('can keep track of up to three rolls', () => {
    testFinalFrame.setRollOne(5);
    testFinalFrame.setRollTwo(5);
    testFinalFrame.setRollThree(6);

    expect(testFinalFrame.getScore()).toBe(16);
  });

  it('prevents a player from rolling a third time if they fail to bowl a strike or spare', () => {
    testFinalFrame.setRollOne(5);
    testFinalFrame.setRollTwo(4);

    expect(() => {
      testFinalFrame.setRollThree(2);
    }).toThrowError(FinalFrame.NO_MORE_ROLLS());
  });

  it('does not award bonus points for strikes and spares', () => {
    const nearPerfectFinalFrame = new FinalFrame();

    nearPerfectFinalFrame.setRollOne(10);
    nearPerfectFinalFrame.setRollTwo(10);
    nearPerfectFinalFrame.setRollThree(8);

    expect(nearPerfectFinalFrame.getScore()).toBe(28);
  });
});
