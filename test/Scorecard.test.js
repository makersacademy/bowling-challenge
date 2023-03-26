const Scorecard = require('../app/Scorecard');

beforeEach( () => {
  scorecard = new Scorecard();
});

const updateFrame = () => {
  scorecard.setCurrentFrameScore(); // score from throws, no bonuses
  scorecard.setCurrentFrameBonus();
  scorecard.awardBonusAllFrames();
  scorecard.setAllFramesTotalScores();
};

describe('Scorecard class', () => {
  describe('frame attributes - before game', () => {
    it('to be default values before throw1', () => {
      scorecard.setCurrentFrame(1);
      
      expect(scorecard.currentFrame).toEqual(scorecard.frame1);
      expect(scorecard.currentFrame.id).toEqual(1);

      expect(scorecard.frame1.score).toEqual(0);
      expect(scorecard.frame1.scoreThrow1).toEqual(0);
      expect(scorecard.frame1.scoreThrow2).toEqual(0);
      expect(scorecard.frame1.scoreThrow3).toEqual(0);
      expect(scorecard.frame1.spare).toEqual(false);
      expect(scorecard.frame1.strike).toEqual(false);
    });
  });
  
  describe('single frame attributes during game - before bonuses', () => {
    it('1 frame, 2 throws, no spare', () => {
      scorecard.setCurrentFrame(1);
      scorecard.throw1(0);
      scorecard.throw2(1);
      updateFrame();
      
      expect(scorecard.frame1.score).toEqual(1);
      expect(scorecard.frame1.scoreThrow1).toEqual(0);
      expect(scorecard.frame1.scoreThrow2).toEqual(1);
      expect(scorecard.frame1.spare).toEqual(false);
      expect(scorecard.frame1.strike).toEqual(false);
    });
    
    it('1 frame, 2 throws, spare', () => {
      scorecard.setCurrentFrame(1);
      scorecard.throw1(5);
      scorecard.throw2(5);      
      updateFrame();
      
      expect(scorecard.frame1.score).toEqual(10);
      expect(scorecard.frame1.scoreThrow1).toEqual(5);
      expect(scorecard.frame1.scoreThrow2).toEqual(5);
      expect(scorecard.frame1.spare).toEqual(true);
      expect(scorecard.frame1.strike).toEqual(false);
    });
    
    it('1 frame, 1 throw, strike', () => {
      scorecard.setCurrentFrame(1);
      scorecard.throw1(10);
      updateFrame();
      
      expect(scorecard.frame1.score).toEqual(10);
      expect(scorecard.frame1.scoreThrow1).toEqual(10);
      expect(scorecard.frame1.spare).toEqual(false);
      expect(scorecard.frame1.strike).toEqual(true);
    });
  });

  describe('assigning bonus points', () => {
    it('frames 1 to 2, frame 1 spare', () => {
      scorecard.setCurrentFrame(1);
      scorecard.throw1(5);
      scorecard.throw2(5);
      updateFrame();
      scorecard.setCurrentFrame(2);
      scorecard.throw1(1);
      scorecard.throw2(1);
      updateFrame();

      expect(scorecard.frame1.spare).toEqual(true);
      expect(scorecard.frame1.score).toEqual(10);
      expect(scorecard.frame1.bonusScore).toEqual(1);
      expect(scorecard.frame1.totalScore).toEqual(11);
    });
    
    it('frames 1 to 2, frame 1 strike', () => {
      scorecard.setCurrentFrame(1);
      scorecard.throw1(10);
      updateFrame();
      scorecard.setCurrentFrame(2);
      scorecard.throw1(1);
      scorecard.throw2(1);
      updateFrame();

      expect(scorecard.frame1.strike).toEqual(true);
      expect(scorecard.frame1.score).toEqual(10);
      expect(scorecard.frame1.bonusScore).toEqual(2);
      expect(scorecard.frame1.totalScore).toEqual(12);
    });
  });

  // describe('full games', () => {
  //   it('perfect game - all frames - 12 strikes, 300 points', () => {
  //     
    //   expect(scorecard.getGameTotalScore()).toEqual(300);
    // });

    // it('worst game - all frames - zero pins, zero points', () => {
    // });

    //   expect(scorecard.getGameTotalScore()).toEqual(0);
  // });

  // tests for frames 9 to 10 that don't have 2 frames after
});
