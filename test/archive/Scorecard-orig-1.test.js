const Scorecard = require('../app/Scorecard');

beforeEach( () => {
  scorecard = new Scorecard();
});

// confirm current frame 1 and previous frame 0
const checkCurrentFrame1 = () => {
  scorecard.setCurrentFrame(1);
  expect(scorecard.currentFrame).toEqual(scorecard.frame1);
  expect(scorecard.previousFrame).toEqual(0);
};

describe('Scorecard class', () => {
  describe('frame attributes - before game', () => {
    it('to be default values before throw1', () => {
      checkCurrentFrame1();

      expect(scorecard.frame1.score).toEqual(0);
      expect(scorecard.frame1.scoreThrow1).toEqual(0);
      expect(scorecard.frame1.scoreThrow2).toEqual(0);
      expect(scorecard.frame1.scoreThrow3).toEqual(0);
      expect(scorecard.frame1.spare).toEqual(false);
      expect(scorecard.frame1.strike).toEqual(false);
    });
  });

  describe('frame attributes - during game', () => {
    // 1 frame
    // -------
    it('1 frame, 2 throws, no spare', () => {
      checkCurrentFrame1();
            
      scorecard.throw1(0);
      scorecard.throw2(1);
      scorecard.updateCurrentFrameScore(
        scorecard.currentFrame.scoreThrow1 + scorecard.currentFrame.scoreThrow2
      );
      scorecard.setCurrentFrameBonus();

      expect(scorecard.frame1.score).toEqual(1);
      expect(scorecard.frame1.scoreThrow1).toEqual(0);
      expect(scorecard.frame1.scoreThrow2).toEqual(1);
      expect(scorecard.frame1.spare).toEqual(false);
      expect(scorecard.frame1.strike).toEqual(false);
    });

    it('1 frame, 2 throws, spare', () => {
      checkCurrentFrame1();
      
      scorecard.throw1(5);
      scorecard.throw2(5);
      scorecard.updateCurrentFrameScore(
        scorecard.frame1.scoreThrow1 + 
          scorecard.frame1.scoreThrow2
      );
      scorecard.setCurrentFrameBonus();

      expect(scorecard.frame1.score).toEqual(10);
      expect(scorecard.frame1.scoreThrow1).toEqual(5);
      expect(scorecard.frame1.scoreThrow2).toEqual(5);
      expect(scorecard.frame1.spare).toEqual(true);
      expect(scorecard.frame1.strike).toEqual(false);
    });

    it('1 frame, 1 throw, strike', () => {
      checkCurrentFrame1();
      
      scorecard.throw1(10);
      scorecard.updateCurrentFrameScore(scorecard.currentFrame.scoreThrow1);
      scorecard.setCurrentFrameBonus();

      expect(scorecard.frame1.score).toEqual(10);
      expect(scorecard.frame1.scoreThrow1).toEqual(10);
      expect(scorecard.frame1.spare).toEqual(false);
      expect(scorecard.frame1.strike).toEqual(true);
    });

    // 2 frames
    // -------
    it('2 frames, frame 1 - spare, updates frame 1 score after frame 2', () => {
      scorecard.setCurrentFrame(1);
      expect(scorecard.currentFrame).toEqual(scorecard.frame1);
      expect(scorecard.previousFrame).toEqual(0);
      scorecard.throw1(4);
      scorecard.throw2(6);
      scorecard.updateCurrentFrameScore(
        scorecard.currentFrame.scoreThrow1 + 
          scorecard.currentFrame.scoreThrow2
      );
      // skip updating previous frame score
      scorecard.setCurrentFrameBonus();

      scorecard.setCurrentFrame(2);
      expect(scorecard.currentFrame).toEqual(scorecard.frame2);
      expect(scorecard.previousFrame).toEqual(scorecard.frame1);
      scorecard.throw1(1);
      scorecard.throw2(0);
      scorecard.updatePreviousFrameScore();

      expect(scorecard.frame1.score).toEqual(11);
      expect(scorecard.frame1.scoreThrow1).toEqual(4);
      expect(scorecard.frame1.scoreThrow2).toEqual(6);
      expect(scorecard.frame1.spare).toEqual(true);
      expect(scorecard.frame1.strike).toEqual(false);
    });

    it('2 frames, frame 2 - strike, updates frame 2 score after frame 3', () => {
      scorecard.setCurrentFrame(2);
      expect(scorecard.currentFrame).toEqual(scorecard.frame2);
      expect(scorecard.previousFrame).toEqual(scorecard.frame1);
      scorecard.throw1(10);
      scorecard.updateCurrentFrameScore(scorecard.currentFrame.scoreThrow1);
      // skip updating previous frame score
      scorecard.setCurrentFrameBonus();

      scorecard.setCurrentFrame(3);
      expect(scorecard.currentFrame).toEqual(scorecard.frame3);
      expect(scorecard.previousFrame).toEqual(scorecard.frame2);
      scorecard.throw1(1);
      scorecard.throw2(1);
      // skip updating current frame score
      scorecard.updatePreviousFrameScore();

      expect(scorecard.frame2.score).toEqual(12);
      expect(scorecard.frame2.scoreThrow1).toEqual(10);
      expect(scorecard.frame2.spare).toEqual(false);
      expect(scorecard.frame2.strike).toEqual(true);
    });
  });


  // frame 10
  // --------
  describe('frame attributes - frame 10', () => {
    const checkCurrentFrame10 = () => {
      scorecard.setCurrentFrame(10);
      expect(scorecard.currentFrame).toEqual(scorecard.frame10);
      expect(scorecard.previousFrame).toEqual(scorecard.frame9);
    };

    it('frame 10, spare, updates frame 10 score after throw 3', () => {
      checkCurrentFrame10();
      
      scorecard.throw1(5);
      scorecard.throw2(5);
      scorecard.updateCurrentFrameScore(
        scorecard.currentFrame.scoreThrow1 + 
          scorecard.currentFrame.scoreThrow2
      );
      scorecard.setCurrentFrameBonus();

      scorecard.throw3(1);
      scorecard.updateFrame10ScoreThrow3();

      expect(scorecard.frame10.score).toEqual(11);
      expect(scorecard.frame10.scoreThrow1).toEqual(5);
      expect(scorecard.frame10.scoreThrow2).toEqual(5);
      expect(scorecard.frame10.scoreThrow3).toEqual(1);
      expect(scorecard.frame10.spare).toEqual(true);
      expect(scorecard.frame10.strike).toEqual(false);
    });

    it('frame 10, strike, updates frame 10 score after throw 3', () => {
      checkCurrentFrame10();
      
      scorecard.throw1(10);
      scorecard.updateCurrentFrameScore(scorecard.currentFrame.scoreThrow1);
      scorecard.setCurrentFrameBonus();

      scorecard.throw2(1);
      scorecard.throw3(1);
      scorecard.updateFrame10ScoreThrow3();

      expect(scorecard.frame10.score).toEqual(12);
      expect(scorecard.frame10.scoreThrow1).toEqual(10);
      expect(scorecard.frame10.scoreThrow2).toEqual(1);
      expect(scorecard.frame10.scoreThrow3).toEqual(1);
      expect(scorecard.frame10.spare).toEqual(false);
      expect(scorecard.frame10.strike).toEqual(true);
    });
  });

  // test and implement for totalling an entire game's score
  // test for perfect game - 10 frames, 10 strikes, 300 points
  // test for worst game - 10 frames, 0 pins, 0 points

  describe('returns total score of a game at any given point', () => {
    it('perfect game - 10 frames, 10 strikes (plus perfect bonus throw), 300 points', () => {

      const updateFrameAttributes = () => {
        scorecard.throw1(10);
        scorecard.updateCurrentFrameScore(scorecard.currentFrame.scoreThrow1);
        scorecard.setCurrentFrameBonus();
        scorecard.updatePreviousFrameScore();
      };

      // use forEach loop here?

      scorecard.setCurrentFrame(1);
      scorecard.throw1(10);
      scorecard.updateCurrentFrameScore(scorecard.currentFrame.scoreThrow1);
      scorecard.setCurrentFrameBonus();

      scorecard.setCurrentFrame(2);
      updateFrameAttributes();
      scorecard.setCurrentFrame(3);
      updateFrameAttributes();
      scorecard.setCurrentFrame(4);
      updateFrameAttributes();
      scorecard.setCurrentFrame(5);
      updateFrameAttributes();
      scorecard.setCurrentFrame(6);
      updateFrameAttributes();
      scorecard.setCurrentFrame(7);
      updateFrameAttributes();
      scorecard.setCurrentFrame(8);
      updateFrameAttributes();
      scorecard.setCurrentFrame(9);
      updateFrameAttributes();
      scorecard.setCurrentFrame(10);
      updateFrameAttributes();
      scorecard.throw3(10);
      scorecard.updateFrame10ScoreThrow3();

      scorecard.setGameTotalScore();

      // This fails - result is 200 points
      // as the Scorecard can only use the throws/points from
      // the next frame, not next 2 frames.
      expect(scorecard.gameTotalScore).toEqual(300);
    })
  });
});
