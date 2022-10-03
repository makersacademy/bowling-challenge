const Frame = require('../app/Frame');

beforeEach( () => {
  frame = new Frame(1);
});

describe('Frame class', () => {
  describe('frame attributes at start of game', () => {
    it('to be default starting values', () => {
      expect(frame.id).toEqual(1);
      expect(frame.score).toEqual(0);
      expect(frame.bonusScore).toEqual(0);
      expect(frame.totalScore).toEqual(0);
      expect(frame.scoreThrow1).toEqual(0);
      expect(frame.scoreThrow2).toEqual(0);
      expect(frame.scoreThrow3).toEqual(0);
      expect(frame.spare).toEqual(false);
      expect(frame.strike).toEqual(false);
    });
  });

  describe('#setBonus', () => {
    it('assigns strike as true', () => {
      frame.scoreThrow1 = 10;
      frame.setBonus();
      expect(frame.scoreThrow1).toEqual(10);
      expect(frame.strike).toEqual(true);
    });
    
    it('assigns spare as true', () => {
      frame.scoreThrow1 = 5;
      frame.scoreThrow2 = 5;
      frame.setBonus();
      expect(frame.scoreThrow1).toEqual(5);
      expect(frame.scoreThrow2).toEqual(5);
      expect(frame.spare).toEqual(true);
    });

    it('does not assign strike or spare as true', () => {
      frame.scoreThrow1 = 0;
      frame.scoreThrow2 = 1;
      frame.setBonus();
      expect(frame.scoreThrow1).toEqual(0);
      expect(frame.scoreThrow2).toEqual(1);
      expect(frame.spare).toEqual(false);
      expect(frame.strike).toEqual(false);
    });
  });

  describe('#setScore - assigns frame score points before bonuses', () => {
    it('assigns points after a strike', () => {
      frame.scoreThrow1 = 10;
      frame.setScore();
      expect(frame.score).toEqual(10);
    });

    it('assigns points after a spare', () => {
      frame.scoreThrow1 = 5;
      frame.scoreThrow2 = 5;
      frame.setScore();
      expect(frame.score).toEqual(10);
    });

    it('assigns points after neither strike or spare', () => {
      frame.scoreThrow1 = 1;
      frame.scoreThrow2 = 1;
      frame.setScore();
      expect(frame.score).toEqual(2);
    });
  });

  describe('#setTotalScore - assigns total frame score from throws and bonuses', () => {
    it('throws points 1, bonus points 1', () => {
      frame.score = 1;
      frame.bonusScore = 1;
      frame.setTotalScore();
      expect(frame.totalScore).toEqual(2);
    });   
  });
});
