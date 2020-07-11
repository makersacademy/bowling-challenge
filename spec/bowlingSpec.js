describe('Bowling', function () {
  var bowling;

  describe('creates a game of bowling', function() {
    it('starts the game', function() {
      bowling = new Bowling();
      expect(bowling).toBeInstanceOf(Bowling);
    });
  });
});