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

  it('starts a new frame after a strike', function() {
    game.roll(10);
    game.roll(1);
    expect(game.frameNumber).toEqual(2);
  });

  describe('#scoreCalculator', function() {
    it('is a strike'), function() {
      game.rollNumber = 2
      game.rollScore = 10
      expect(game.isAStrike()).toBe(true);
    };

    it('is a spare', function() {
      game.rollNumber = 1;
      game.pins = 0;
      expect(game.isAStrike()).toBe(false);
      expect(game.isASpare()).toBe(true);
    });

    it('stores the score', function() {
      game.roll(5);
      game.roll(2);
      expect(game.score()).toEqual(7);
    });

    it('is a spare bonus', function() {
      game.roll(3);
      game.roll(7);
      game.roll(2);
      game.roll(4);
      expect(game.score()).toEqual(18);
    });

    it('is a strike bonus', function () {
      game.roll(10);
      game.roll(2);
      game.roll(4);
      expect(game.score()).toEqual(22);
    });

    it('is a second strike in a row', function() {
      game.roll(10);
      game.roll(10);
      expect(game.score()).toEqual(40);
    });
  });
});
