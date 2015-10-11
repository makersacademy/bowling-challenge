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
      var scoreboard = {1: [], 2: [], 3: [], 4: [], 5: [],
                     6: [], 7: [], 8: [], 9: [], 10: []};
    expect(game.scorecard).toEqual(scoreboard);
    });
  });

  describe('should', function() {

    it('be able to throw a ball', function() {
      expect(game.throwBall(5)).toEqual(5);
    });

    it('record a throw', function() {
      game.throwBall(5);
      expect(game.scorecard[game.frame]).toEqual([5]);
    });

    it('record two throws', function() {
      game.throwBall(5);
      game.throwBall(4);
      expect(game.scorecard[1]).toEqual([5, 4]);
    });

    it('change roll turn after a throw', function() {
      game.throwBall(5);
      expect(game.rollTurn).toBe(2);
    });

    it('reset roll turn to 1 after two throws', function() {
      game.throwBall(5);
      game.throwBall(4);
      expect(game.rollTurn).toBe(1);
    });

    it('change frame after two throws', function() {
      game.throwBall(5);
      game.throwBall(4);
      expect(game.frame).toBe(2);
    });

    it('record a strike', function() {
      game.throwBall(10);
      expect(game.scorecard[1]).toEqual([10])
      expect(game.rollTurn).toBe(1);
      expect(game.frame).toBe(2);
    });

  });

});
