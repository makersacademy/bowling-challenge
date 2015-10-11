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
    });

    it('be able to throw a ball', function() {
      expect(game.throwBall(8)).toEqual(8);
    });

    it('record a throw', function() {
      expect(game.scorecard[1]).toEqual([5, 4]);
    });

    it('record two throws', function() {
      expect(game.scorecard[1]).toEqual([5, 4]);
    });

    it('change roll turn after a throw', function() {
      game.throwBall(7);
      expect(game.rollTurn).toBe(2);
    });

    it('reset roll turn to 1 after two throws', function() {
      expect(game.rollTurn).toBe(1);
    });

    it('change frame after two throws', function() {
      expect(game.frame).toBe(2);
    });

    it('record a strike', function() {
      game.throwBall(10);
      expect(game.scorecard[2]).toEqual([10])
      expect(game.rollTurn).toBe(1);
      expect(game.frame).toBe(3);
    });

    it('give a strike bonus', function() {
      game.throwBall(10);
      game.throwBall(5);
      game.throwBall(1);
    });

  });


  describe('calculates', function() {
    beforeEach(function() {
      game.throwBall(5);
      game.throwBall(4);
    });

    it('a frame\'s score', function() {
      expect(game._frameScore(1)).toEqual(9);
    });

    it('total score after a completed roll', function() {
      expect(game.totalScore()).toEqual(9);
    });


  });




















});
