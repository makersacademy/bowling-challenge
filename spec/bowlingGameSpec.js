describe('bowlingGame', function() {

  var game;

  beforeEach(function() {
    game = new bowlingGame();
  });

  describe('#initialize', function() {
    it('starts with no score', function() {
      expect(game.score()).toEqual(0);
    });
    it('starts with empty array of pins', function() {
      expect(game.pins()).toEqual([]);
    });
    it('starts with frame 0', function() {
      expect(game.frame()).toEqual(1);
    });
    it('starts with roll 0', function() {
      expect(game.roll()).toEqual(0);
    });
  });

  describe('#knockedDownPins', function() {
    it('adds number of pins knocked down to array', function() {
      game.knockedDownPins(3);
      game.knockedDownPins(4);
      expect(game.pins()).toEqual([3, 4]);
    });

    it('adds number of roll after each roll', function() {
      game.knockedDownPins(3);
      expect(game.roll()).toEqual(1);
      game.knockedDownPins(3);
      expect(game.roll()).toEqual(2);
    });

    it('ends the frame if there is a strike', function() {
      game.knockedDownPins(10);
      expect(game.score()).toEqual(10)
    });
  });

  describe('#addToScore', function() {
    it('adds to score after two rolls', function() {
      game.knockedDownPins(3);
      game.knockedDownPins(4);
      game.addToScore();
      expect(game.score()).toEqual(7);
      expect(game.frame()).toEqual(2);
      expect(game.roll()).toEqual(0);
    });
  });



});
