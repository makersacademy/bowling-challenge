describe('Bowling Game', function() {

  beforeEach(function() {
    game = new BowlingGame();
    bowlingFrame = new BowlingFrame(1);
  });

  it('can create a new game', function() {
    expect(game.currentGame).toBeDefined();
  });

  it('adds up first frames score', function() {
    bowlingFrame.rollOne(7);
    bowlingFrame.rollTwo(2);
    expect(game.currentScore()).toEqual(9);
  });

  it('adds up frame scores', function() {
    bowlingFrame.rollOne(7);
    bowlingFrame.rollTwo(2);
    bowlingFrameTwo = new BowlingFrame(2);
    bowlingFrameTwo.rollOne(5);
    bowlingFrameTwo.rollTwo(1);
    expect(game.currentScore()).toEqual(15);
  });

  it('current score should start at 0', function() {
    expect(game.currentScore()).toEqual(0);
  });

  describe('Spare Logic', function() {
    it('current score should not show if roll one of next frame has not been rolled', function() {
      bowlingFrame.rollOne(7);
      bowlingFrame.rollTwo(3);
      expect(game.currentScore()).toEqual(0);
    });

    it('should add first rolls score of next frame to current score', function() {
      bowlingFrame.rollOne(7);
      bowlingFrame.rollTwo(3);
      bowlingFrameTwo = new BowlingFrame(2);
      bowlingFrameTwo.rollOne(4);
      expect(game.currentScore()).toEqual(14);
    });
  });

  describe('Strike Logic', function() {
    it('current score should not show until next frame completed, if next frame is not a strike', function() {
      bowlingFrame.rollOne(10);
      expect(game.currentScore()).toEqual(0);
    });

    it('should add whole next frame score to current score if next frame is not a strike', function() {
      bowlingFrame.rollOne(10);
      bowlingFrameTwo = new BowlingFrame(2);
      bowlingFrameTwo.rollOne(3);
      bowlingFrameTwo.rollTwo(5);
      expect(game.scoreGrid[1]).toEqual(18);
    });

    it('should add next frame and next next roll to current score if next frame is also a strike, but next next frame is not', function() {
      bowlingFrame.rollOne(10);
      bowlingFrameTwo = new BowlingFrame(2);
      bowlingFrameTwo.rollOne(10);
      bowlingFrameThree = new BowlingFrame(3);
      bowlingFrameThree.rollOne(5);
      expect(game.scoreGrid[1]).toEqual(25);
    });

    it('if next frame is strike, and next next frame is not, it should not update current score until the first roll on the next next frame is rolled', function() {
      bowlingFrame.rollOne(10);
      bowlingFrameTwo = new BowlingFrame(2);
      bowlingFrameTwo.rollOne(10);
      expect(game.scoreGrid[1]).toEqual(null);
    });

    it('should add next two frames to current score if next two frames are also strikes', function() {
      bowlingFrame.rollOne(10);
      bowlingFrameTwo = new BowlingFrame(2);
      bowlingFrameTwo.rollOne(10);
      bowlingFrameThree = new BowlingFrame(3);
      bowlingFrameThree.rollOne(10);
      expect(game.scoreGrid[1]).toEqual(30);
    });
  });

  describe('Bonus Roll Logic', function() {
    it('should add bonus roll to score if first two rolls are greater or equal to ten', function() {
      bowlingFrame.rollOne(10);
      bowlingFrameTwo = new BowlingFrame(2);
      bowlingFrameTwo.rollOne(10);
      bowlingFrameThree = new BowlingFrame(3);
      bowlingFrameThree.rollOne(10);
      bowlingFrameFour = new BowlingFrame(4);
      bowlingFrameFour.rollOne(10);
      bowlingFrameFive = new BowlingFrame(5);
      bowlingFrameFive.rollOne(10);
      bowlingFrameSix = new BowlingFrame(6);
      bowlingFrameSix.rollOne(10);
      bowlingFrameSeven = new BowlingFrame(7);
      bowlingFrameSeven.rollOne(10);
      bowlingFrameEight = new BowlingFrame(8);
      bowlingFrameEight.rollOne(10);
      bowlingFrameNine = new BowlingFrame(9);
      bowlingFrameNine.rollOne(10);
      bowlingFrameTen = new BowlingFrame(10);
      bowlingFrameTen.rollOne(1);
      bowlingFrameTen.rollTwo(9);
      bowlingFrameTen.bonusRoll(4);
      expect(game.scoreGrid[10]).toEqual(14);
    });

    it('should not add bonus roll to score if first two rolls are less than ten', function() {
      bowlingFrame.rollOne(10);
      bowlingFrameTwo = new BowlingFrame(2);
      bowlingFrameTwo.rollOne(10);
      bowlingFrameThree = new BowlingFrame(3);
      bowlingFrameThree.rollOne(10);
      bowlingFrameFour = new BowlingFrame(4);
      bowlingFrameFour.rollOne(10);
      bowlingFrameFive = new BowlingFrame(5);
      bowlingFrameFive.rollOne(10);
      bowlingFrameSix = new BowlingFrame(6);
      bowlingFrameSix.rollOne(10);
      bowlingFrameSeven = new BowlingFrame(7);
      bowlingFrameSeven.rollOne(10);
      bowlingFrameEight = new BowlingFrame(8);
      bowlingFrameEight.rollOne(10);
      bowlingFrameNine = new BowlingFrame(9);
      bowlingFrameNine.rollOne(10);
      bowlingFrameTen = new BowlingFrame(10);
      bowlingFrameTen.rollOne(1);
      bowlingFrameTen.rollTwo(3);
      expect(game.scoreGrid[10]).toEqual(4);
    });
  });

  it('should accurately calculate the score', function() {
    bowlingFrame.rollOne(10);
    bowlingFrameTwo = new BowlingFrame(2);
    bowlingFrameTwo.rollOne(10);
    bowlingFrameThree = new BowlingFrame(3);
    bowlingFrameThree.rollOne(10);
    bowlingFrameFour = new BowlingFrame(4);
    bowlingFrameFour.rollOne(10);
    bowlingFrameFive = new BowlingFrame(5);
    bowlingFrameFive.rollOne(10);
    bowlingFrameSix = new BowlingFrame(6);
    bowlingFrameSix.rollOne(10);
    bowlingFrameSeven = new BowlingFrame(7);
    bowlingFrameSeven.rollOne(10);
    bowlingFrameEight = new BowlingFrame(8);
    bowlingFrameEight.rollOne(10);
    bowlingFrameNine = new BowlingFrame(9);
    bowlingFrameNine.rollOne(10);
    bowlingFrameTen = new BowlingFrame(10);
    bowlingFrameTen.rollOne(10);
    bowlingFrameTen.rollTwo(10);
    bowlingFrameTen.bonusRoll(10);
    expect(game.score).toEqual(300);
  });
});
