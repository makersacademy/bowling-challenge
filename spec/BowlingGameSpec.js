describe('Bowling Game', function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe('bowling game', function() {

    it('makes a new game', function() {
      expect(bowlingGame.newGame).toEqual([[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0,0]])
    });
  });
});
