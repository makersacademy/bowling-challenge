describe('Adding player names', function() {

  var bowlingGame

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  describe('before each game', function() {

    it('has no names registed', function() {
      expect(bowlingGame.players()).toEqual([]);
    });
  });
});
