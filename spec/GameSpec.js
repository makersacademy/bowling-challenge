describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('starts', function() {

    it('on the first frame', function() {
      expect(game.frame).toBe(1);
    });

    it('on the first roll', function() {
      expect(game.rollTurn).toBe(1);
    });

    it('can change turn', function() {
      game.nextRoll();
      expect(game.rollTurn).toBe(2);
    });

    it('can change frame', function() {
      game.nextFrame();
      expect(game.frame).toBe(2);
    });

    it('has score card', function() {
      var scorecard = {1: [], 2: [], 3: [], 4: [], 5: [],
                     6: [], 7: [], 8: [], 9: [], 10: []};
    expect(game.scorecard).toEqual(scorecard);
    });

  });


  describe('should', function() {

    beforeEach(function() {
      game.throwBall(5);
      game.throwBall(4);
      game.nextFrame();
    });

    it('be able to throw a ball', function() {
      expect(game.throwBall(8)).toEqual(8);
    });

    it('record throws', function() {
      expect(game.scorecard[1]).toEqual([5, 4]);
    });

    it('change roll turn after a throw', function() {
      game.throwBall(7);
      game.nextRoll();
      expect(game.rollTurn).toBe(2);
    });

    it('reset roll turn to 1 after two throws', function() {
      expect(game.rollTurn).toBe(1);
    });

    it('change frame after two throws', function() {
      expect(game.frame).toBe(2);
    });

    it('know previous frame was a strike', function() {
      game.throwBall(10);
      game.nextFrame();
      expect(game.isPreviousStrike()).toBe(true);
    });

    it('record a strike', function() {
      game.throwBall(10);
      expect(game.scorecard[2]).toEqual([10]);
    });

    it('know previous frame was a spare', function() {
      game.throwBall(5);
      game.throwBall(5);
      game.nextFrame();
      expect(game.isPreviousSpare()).toBe(true);
    });


  });


  describe('calculates', function() {
    beforeEach(function() {
      game.throwBall(5);
      game.throwBall(5);
      game.nextFrame();
    });

    it('a frame\'s score', function() {
      expect(game.frameScore(1)).toEqual(10);
    });

    it('total score after a completed roll', function() {
      game.throwBall(5);
      game.throwBall(4);
      expect(game.totalScore()).toEqual(19);
    });

    it('a strike bonus', function() {
      game.throwBall(10);
      game.nextFrame();
      game.throwBall(5);
      game.throwBall(1);
      game.strikeBonus();
      expect(game.totalScore()).toEqual(32)
    });

    it('a spare bonus', function() {
      game.throwBall(4);
      game.throwBall(0);
      game.spareBonus();
      expect(game.totalScore()).toEqual(18);
    });


  });




















});
