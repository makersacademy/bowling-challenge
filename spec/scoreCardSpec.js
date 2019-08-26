describe('scoreCard', () => {
  
  var ScoreCard = require('../lib/scoreCard');
  var Frame = require('../lib/frame');
  var scoreCard;

  beforeEach( () => {
    scoreCard = new ScoreCard(Frame);
  });

  describe('initialization', () => {
    
    it('should have 10 frames in frames', () => {
      for(let i = 1; i <= 10; i++){
        expect(scoreCard.frames[`frame${i}`]).toEqual(jasmine.any(Frame));
      }
    });
  
  });

  describe('.roll', () => {

    it('should pass a roll to the current frame', () => {
      let frame1 = scoreCard.frames.frame1;
      scoreCard.roll(5);
      expect(frame1.getScore()).toEqual(5);
    });

    it('sets gameOver to true after the last roll', () => {
      scoreCard.currentFrame = scoreCard.frames.frame10;
      scoreCard.roll(5);
      scoreCard.roll(3);
      expect(scoreCard.gameOver).toBe(true);
    });

    it('throws an error if the game is over', () => {
      scoreCard.currentFrame = scoreCard.frames.frame10;
      scoreCard.roll(5);
      scoreCard.roll(3);
      expect(() => {scoreCard.roll(4)}).toThrow("Game is over!");
    });

  });

  describe('currentFrame', () => {
    
    it('returns the frame which is currently being played', () => {
      expect(scoreCard.currentFrame).toEqual(scoreCard.frames.frame1);
      scoreCard.roll(4);
      scoreCard.roll(5);
      expect(scoreCard.currentFrame).toEqual(scoreCard.frames.frame2);
    });

  });

  describe('.getScore', () => {
    
    it('gets the score of a frame', () => {
      scoreCard.roll(5);
      scoreCard.roll(3);
      expect(scoreCard.getScore(scoreCard.frames.frame1)).toEqual(8);
    });

    it('should get score plus bonuses with a spare', () => {
      scoreCard.roll(8);
      scoreCard.roll(2);
      scoreCard.roll(5);
      scoreCard.roll(2);
      expect(scoreCard.getScore(scoreCard.frames.frame1)).toEqual(15);
    });

    it('should get score plus bonuses with a strike', () => {
      scoreCard.roll(10);
      scoreCard.roll(2);
      scoreCard.roll(5);
      expect(scoreCard.getScore(scoreCard.frames.frame1)).toEqual(17);
    });

    it('should get score plus bonuses with a double', () => {
      scoreCard.roll(10);
      scoreCard.roll(10);
      scoreCard.roll(5);
      expect(scoreCard.getScore(scoreCard.frames.frame1)).toEqual(25);
    });

    it('9th frame: should get score plus bonuses with a strike', () => {
      scoreCard.currentFrame = scoreCard.frames.frame9
      scoreCard.roll(10);
      scoreCard.roll(7);
      scoreCard.roll(2);
      expect(scoreCard.getScore(scoreCard.frames.frame9)).toEqual(19);
    });

    it('9th frame: should get score plus bonuses with a strike followed by 3 strikes', () => {
      scoreCard.currentFrame = scoreCard.frames.frame9;
      scoreCard.roll(10);
      scoreCard.roll(10);
      scoreCard.roll(10);
      scoreCard.roll(10);
      expect(scoreCard.getScore(scoreCard.frames.frame9)).toEqual(30);
    });

    it('10th frame: should get score plus bonuses with a strike followed by 7 and 2', () => {
      scoreCard.currentFrame = scoreCard.frames.frame10;
      scoreCard.roll(10);
      scoreCard.roll(7);
      scoreCard.roll(2);
      expect(scoreCard.getScore(scoreCard.frames.frame10)).toEqual(19);
    });

    it('10th frame: should get score plus bonuses with a strike followed by 2 strikes', () => {
      scoreCard.currentFrame = scoreCard.frames.frame10;
      scoreCard.roll(10);
      scoreCard.roll(10);
      scoreCard.roll(10);
      expect(scoreCard.getScore(scoreCard.frames.frame10)).toEqual(30);
    });
    
  });
});