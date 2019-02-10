
describe('ScoreCard', () => {
  const ScoreCard = require('../src/scoreCard')
  let scoreCard;

  beforeEach(() => {
    scoreCard = new ScoreCard();
  });

  describe('recordScore', () => {
    it('adds the current frame to scorecard.scoreArray', () => {
      scoreCard.recordScore(2, 8);
      expect(scoreCard.scoreArray).toEqual([ [2, 8, 0] ]);
    });
  });

  describe('isGameComplete', () => {
    it('correctly reports if the game is complete', () =>{
      scoreCard.recordScore(1, 2, 3);
      scoreCard.recordScore(2, 2, 2);
      expect(scoreCard.isGameComplete()).toEqual(false);
    });
  });

  describe('finalScore', () =>{
    it('throws an error if game is not yet complete', () => {
      scoreCard.recordScore(1, 1, 1);
      expect(() => {
        scoreCard.finalScore()
      }).toThrow();
    });

    it('returns the final score in a game without strikes or spares', () => {
      for(let i = 1 ; i < 11 ; i++){
        return scoreCard.recordScore(i, 1, 1);
      }
      expect(scoreCard.finalScore()).toEqual(20);
    });
  });


});