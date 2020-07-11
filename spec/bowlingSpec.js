describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('creates a game of bowling', function() {
    it('starts the game', function() {
      expect(bowling).toBeInstanceOf(Bowling);
    });
  });
  describe('roll', function() {
    it('starts first roll and records to screen', function() {
      bowling.roll(5);
      expect(bowling.display()).toContain(5);
    });
  });
});