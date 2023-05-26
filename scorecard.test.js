const Scorecard = require('./scorecard');



describe('Scorecard', () => {
  let scorecard = new Scorecard();
  beforeEach(() => {
    scorecard = new Scorecard();
  })

  const calculateScore = () => {
    scorecard.calculateBasicScore();
    scorecard.calculateStrikeBonuses();
    scorecard.calculateSpareBonuses();
  }

  it('should initially return 0 and an empty array of frames', () => {
    expect(scorecard.getFrames()).toEqual([]);
    calculateScore();
    expect(scorecard.getTotalScore()).toBe(0);
  });

  it('should return the score of 7 first frame in the array', () => {
    scorecard.addFrame(2, 5, 0);
    calculateScore();

    expect(scorecard.getFrames()).toEqual([[2, 5, 0]]); 
    expect(scorecard.getTotalScore()).toBe(7);
  });

  it('should return a score of 15 and two frames in the array', () => {
    scorecard.addFrame(2, 5, 0);
    scorecard.addFrame(3, 5, 0);
    calculateScore();

    expect(scorecard.getFrames()).toEqual([[2, 5, 0], [3, 5, 0]]);
    expect(scorecard.getTotalScore()).toBe(15);
  });

  it('should return 17 instead of 16 because the spare doubles the first roll of the next frame', () => {
    scorecard.addFrame(5, 5, 0);
    scorecard.addFrame(1, 5, 0);
    calculateScore();
  
    expect(scorecard.getTotalScore()).toBe(17);
  })

  it('should return 29 instead of 27 because the strike doubles the next two rolls', () => {
    scorecard.addFrame(2, 5, 0);
    scorecard.addFrame(3, 5, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(1, 1, 0);
    calculateScore();

    expect(scorecard.getTotalScore()).toBe(29);
  })

  it('should return 55 instead of 45 because two strikes doubles the next rolls', () => {
    scorecard.addFrame(2, 5, 0);
    scorecard.addFrame(3, 5, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(1, 1, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(3, 5, 0);
    calculateScore();

    expect(scorecard.getTotalScore()).toBe(55);
  })

  it('should return 133', () => {
    scorecard.addFrame(1, 4, 0);
    scorecard.addFrame(4, 5, 0);
    scorecard.addFrame(6, 4, 0);
    scorecard.addFrame(5, 5, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(0, 1, 0);
    scorecard.addFrame(7, 3, 0);
    scorecard.addFrame(6, 4, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(2, 8, 6);
    calculateScore();

    expect(scorecard.getTotalScore()).toBe(133);
  })

  it("shouldn't return 300 as the game is not over", () => {
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    
    calculateScore();
    scorecard.checkPerfectGame();

    expect(scorecard.getTotalScore()).toBe(210);
  })

  it('should return 300 as a score in case of a perfect game', () => {
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    scorecard.addFrame(10, 0, 0);
    
    calculateScore();
    scorecard.checkPerfectGame();

    expect(scorecard.getTotalScore()).toBe(300);
  })
});