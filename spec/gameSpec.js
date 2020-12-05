describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('new Game', function() {
    it('begins with frame number one', function() {
      expect(game.frameNumber).toEqual(1);
    });

    it('begins with ten pins', function() {
      expect(game.pins).toEqual(10);
    });

    it('begins with two rolls', function() {
      expect(game.rollNumber).toEqual(2);
    });

    it('begins with no score', function() {
      expect(game.playerScore).toEqual(0);
    });
  });

  describe('#roll', function() {
    beforeEach(function() {
      game.roll(6);
    });

    it('decreses pins when user rolls', function() {
      expect(game.pins).toEqual(4);
    });

    it('decreses the roll number', function() {
      expect(game.rollNumber).toEqual(1);
    });

    it('throws error if roll goes below zero', function() {
      expect(function() { game.roll(5); }).toThrowError('Invalid roll');
    });

    it('throws error if roll goes above 10', function() {
      expect(function() { game.roll(11); }).toThrowError('Invalid roll');
    });

    it('throws error if roll a number less than 0', function() {
      expect(function() { game.roll(-1); }).toThrowError('Invalid roll');
    });
  });

  describe('#scoreCalculator', function() {
    it('stores the score', function() {
      game.roll(5);
      game.roll(2);
      expect(game.score()).toEqual(7);
    });
  });
});
