describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game;
    bowl = new Bowl;
  });

  describe('turn', function() {
    it('should return a value after turn', function() {
      expect(game.turn(bowl)).toBeDefined();
    });
  });

  describe('frame', function() {
    it('should push the score to the board', function() {
      game.frameSet();
      expect(game.rollBreakdown.length).toEqual(1);
    });
  });

  describe('play', function() {
    it ('has ten scores', function() {
      game.play();
      console.log('Scores: ');
      console.log(game.scores);
      console.log('Rollbreakdown: ');
      console.log(game.rollBreakdown);
      console.log('Results: ');
      console.log(game.results);
      console.log('Bonuses: ');
      console.log(game.bonus);
      console.log('Total scores: ');
      console.log(game.totalScore());
      expect(game.scores.length).toEqual(10);
    });
  });

});
