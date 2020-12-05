describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('new game', function() {
    it('begins with frame number one', function() {
      expect(game.frameNumber).toEqual(1);
    });

    it('begins with ten pins', function() {
      expect(game.pins).toEqual(10);
    });

    it('begins with two rolls', function() {
      expect(game.rollNumber).toEqual(2);
    });
  });

  describe('new roll', function() {
    beforeEach(function() {
      game.roll(6);
    });

    it('decreses pins when user rolls', function() {
      expect(game.pins).toEqual(4);
    });

    it('decreses the roll number', function() {
      expect(game.rollNumber).toEqual(1);
    });
  });
});
