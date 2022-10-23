const GameScore = require('./lib/GameScore');
const Frame = require('./lib/frame');

describe('integration', () => {
  it('can return the correct number of points up to the 9th frame', () => {
    let gameScore = new GameScore();
    const frame1 = new Frame();
    frame1.addPins(1);
    frame1.addPins(4);
    gameScore.addFrameScore(frame1);

    const frame2 = new Frame();
    frame2.addPins(4);
    frame2.addPins(5);
    gameScore.addFrameScore(frame2);

    const frame3 = new Frame();
    frame3.addPins(6);
    frame3.addPins(4);
    gameScore.addFrameScore(frame3);

    const frame4 = new Frame();
    frame4.addPins(5);
    frame4.addPins(5);
    gameScore.addFrameScore(frame4);

    const frame5 = new Frame();
    frame5.addPins(10);
    gameScore.addFrameScore(frame5);

    const frame6 = new Frame();
    frame6.addPins(0);
    frame6.addPins(1);
    gameScore.addFrameScore(frame6);

    result = gameScore.calcTotalPoints();
    expect(result).toStrictEqual(61);
  });

  describe('GameScore and Frame', () => {
    it('can return the correct number of points up to the 9th frame', () => {
      let gameScore = new GameScore();
      const frame1 = new Frame();
      frame1.addPins(1);
      frame1.addPins(4);
      gameScore.addFrameScore(frame1);

      const frame2 = new Frame();
      frame2.addPins(4);
      frame2.addPins(5);
      gameScore.addFrameScore(frame2);

      const frame3 = new Frame();
      frame3.addPins(6);
      frame3.addPins(4);
      gameScore.addFrameScore(frame3);

      const frame4 = new Frame();
      frame4.addPins(5);
      frame4.addPins(5);
      gameScore.addFrameScore(frame4);

      const frame5 = new Frame();
      frame5.addPins(10);
      gameScore.addFrameScore(frame5);

      const frame6 = new Frame();
      frame6.addPins(0);
      frame6.addPins(1);
      gameScore.addFrameScore(frame6);

      const frame7 = new Frame();
      frame7.addPins(7);
      frame7.addPins(3);
      gameScore.addFrameScore(frame7);

      const frame8 = new Frame();
      frame8.addPins(6);
      frame8.addPins(4);

      gameScore.addFrameScore(frame8);

      const frame9 = new Frame();
      frame9.addPins(9, 0);
      gameScore.addFrameScore(frame9);

      result = gameScore.calcTotalPoints();
      expect(result).toStrictEqual(105);
    });

    it('can return the correct number of points on a full game', () => {
      let gameScore = new GameScore();
      const frame1 = new Frame();
      frame1.addPins(1);
      frame1.addPins(4);
      gameScore.addFrameScore(frame1);
      console.log('frameScore array1:', gameScore.frameScores);

      const frame2 = new Frame();
      frame2.addPins(4);
      frame2.addPins(5);
      gameScore.addFrameScore(frame2);
      console.log('frameScore array2:', gameScore.frameScores);

      const frame3 = new Frame();
      frame3.addPins(6);
      frame3.addPins(4);
      gameScore.addFrameScore(frame3);
      console.log('frameScore array3:', gameScore.frameScores);

      const frame4 = new Frame();
      frame4.addPins(5);
      frame4.addPins(5);
      gameScore.addFrameScore(frame4);
      console.log('frameScore array4:', gameScore.frameScores);

      const frame5 = new Frame();
      frame5.addPins(10);
      gameScore.addFrameScore(frame5);
      console.log('frameScore array5:', gameScore.frameScores);

      const frame6 = new Frame();
      frame6.addPins(1);
      frame6.addPins(0);
      console.log('frame 6 pins', frame6.framePins());
      console.log('frame 6 strike', frame6.isStrike());
      console.log('frame 6 strike', frame6.isSpare());
      console.log(frame6.framePins().reduce((val1, val2) => val1 + val2));
      gameScore.addFrameScore(frame6);
      console.log('frameScore array6:', gameScore.frameScores);

      const frame7 = new Frame();
      console.log('frame 7 pins', frame7.framePins());

      frame7.addPins(7);
      frame7.addPins(3);
      console.log('prev round strike: ', gameScore.prevRoundStrike);
      console.log('prev two round strike: ', gameScore.prevTwoRoundStrike);
      console.log('frame 7 pins', frame7.framePins());
      console.log('frame 7 strike', frame7.isStrike());
      console.log('frame 7strike', frame7.isSpare());
      console.log('frameScore array7 before:', gameScore.frameScores);

      gameScore.addFrameScore(frame7);
      console.log('frameScore array7:', gameScore.frameScores);

      const frame8 = new Frame();
      frame8.addPins(6);
      frame8.addPins(4);
      gameScore.addFrameScore(frame8);
      console.log('frameScore array8:', gameScore.frameScores);

      const frame9 = new Frame();
      frame9.addPins(10);
      gameScore.addFrameScore(frame9);
      console.log('frameScore array9:', gameScore.frameScores);

      const frame10 = new Frame();
      frame10.addPins(2);
      frame10.addPins(8);
      frame10.addPins(6);
      gameScore.addFrameScore(frame10);
      console.log('frameScore array10:', gameScore.frameScores);

      result = gameScore.calcTotalPoints();
      console.log('result: ', result);
      expect(result).toEqual(133);
    });
  });
});
