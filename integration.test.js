const GameScore = require('./lib/GameScore');
const Frame = require('./lib/frame');

describe('integration', () => {
  describe('GameScore and Frame', () => {
    it('can return the correct number of points up to the 9th frame', () => {
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
      frame6.addPins(0);
      frame6.addPins(1);
      gameScore.addFrameScore(frame6);
      console.log('frameScore array6:', gameScore.frameScores);

      const frame7 = new Frame();
      frame7.addPins(7);
      frame7.addPins(3);

      gameScore.addFrameScore(frame7);

      const frame8 = new Frame();
      frame8.addPins(6);
      frame8.addPins(4);

      gameScore.addFrameScore(frame8);

      const frame9 = new Frame();
      frame9.addPins(10);
      gameScore.addFrameScore(frame9);

      result = gameScore.calcTotalPoints();
      expect(result).toStrictEqual(107);
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
      frame6.addPins(0);
      frame6.addPins(1);
      gameScore.addFrameScore(frame6);
      console.log('frameScore array6:', gameScore.frameScores);

      const frame7 = new Frame();
      frame7.addPins(7);
      frame7.addPins(3);

      gameScore.addFrameScore(frame7);

      const frame8 = new Frame();
      frame8.addPins(6);
      frame8.addPins(4);

      gameScore.addFrameScore(frame8);

      const frame9 = new Frame();
      frame9.addPins(10);
      gameScore.addFrameScore(frame9);

      const frame10 = new Frame();
      frame10.addPins(2);
      frame10.addPins(8);
      frame10.addPins(6);
      gameScore.addFrameScore(frame10);

      result = gameScore.calcTotalPoints();
      expect(result).toEqual(133);
    });
  });
});
