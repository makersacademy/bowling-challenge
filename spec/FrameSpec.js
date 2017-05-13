describe('Frame', function () {
  var frame;
  var game;

  beforeEach(function () {
    frame = new Frame();
  });

  describe('when created', function () {

    it ('should not have a score', function () {
      expect(frame.score).toBe(0);
    });

    it ('should not have a bonus score', function () {
      expect(frame.bonusScore).toBe(0);
    });
  });

  describe('during a single frame', function () {

    it ('know what the score of the first roll is', function () {
      frame.rollOne(7);
      expect(frame.firstRoll).toBe(7);
    });

    it ('knows when a strike has been rolled', function () {
      frame.number = 1
      frame.rollOne(10);
      expect(frame._isStrike()).toBeTruthy();
    });

    it ('sets the second roll score to 0 if there is a strike', function () {
      frame.rollOne(10);
      expect(function() {frame.rollTwo(2);}).toThrow("A strike was thrown on the first ball of the frame, score not recorded.");
      expect(frame.secondRoll).toBe(0);
    });

    it ('know how to record the score of the second roll', function () {
      frame.number = 2;
      frame.rollOne(2);
      frame.rollTwo(5);
      expect(frame.secondRoll).toBe(5);
    });

    it ('knows when a spare has been rolled', function () {
      frame.number = 4;
      frame.rollOne(6);
      frame.rollTwo(4);
      expect(frame._isSpare()).toBeTruthy();
    });
  });

  describe ('calculating bonuses', function () {

    beforeEach(function () {
      game = new BowlingGame();
    })

    it ('can calculate a spare bonus', function () {
      game.frames[1].rollOne(7);
      game.frames[1].rollTwo(3);
      game.frames[2].rollOne(4);
      game.frames[1].bonusScoreCalculation();

      expect(game.frames[1].bonusScore).toBe(4);
    });

    it ('can calculate a strike bonus', function () {
      game.frames[1].rollOne(10);
      game.frames[2].rollOne(3);
      game.frames[2].rollTwo(4);
      game.frames[1].bonusScoreCalculation();

      expect(game.frames[1].bonusScore).toBe(7);
    });

    it ('can calculate a double strike', function () {
      game.frames[1].rollOne(10);
      game.frames[2].rollOne(10);
      game.frames[3].rollOne(7);
      game.frames[1].bonusScoreCalculation();

      expect(game.frames[1].bonusScore).toBe(17);
    });

    it ('calculates the final frames base score from 3 rolls', function () {
      game.frames[9].rollOne(10);
      game.frames[9].rollTwo(10);
      game.frames[9].rollThree(7);
      game.frames[9].bonusScoreCalculation()

      expect(game.frames[9].bonusScore).toBe(0);
    });
  });

  describe('calculate the frame\'s base score', function () {

    it ('can total the 2 roll for a given frame', function () {
      frame.number = 1;
      frame.rollOne(3);
      frame.rollTwo(4);
      frame._setFrameScore()
      expect(frame._frameScore()).toBe(7);
    });
  });

  describe('last frame', function () {

    beforeEach(function () {
      frame.number = 10;
      frame.rollOne(5);
      frame.rollTwo(5);
      frame.rollThree(10);
    })

    it ('allows you to roll a third ball in the last frame if a strike or spare is rolled', function () {
      expect(frame._isThridRollNeeded()).toBeTruthy();
    });

  });
});
