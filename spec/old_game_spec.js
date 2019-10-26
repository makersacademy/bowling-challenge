describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('getCurrentScore', function() {
    it('displays the players current score.', function() {
      expect(game.getCurrentScore()).toEqual(0);
    });
  });

  describe('getCurrentFrame', function() {
    it('displays the players current Frame.', function() {
      expect(game.getCurrentFrame()).toEqual(1);
    });
  });

  describe('getCurrentRoll', function() {
    it('displays the players current Roll.', function() {
      expect(game.getCurrentRoll()).toEqual(1);
    });
  });

  describe('roll', function() {
    it('adds the points of each roll to the total', function() {
      game.roll(1);
      expect(game.getCurrentScore()).toEqual(1);
    });
  });

  describe('endTurn', function() {
    it('changes the turn', function() {
      for (i=0; i < 5; i++) { game.endTurn(); }
      expect(game.getCurrentFrame()).toEqual(3);
      expect(game.getCurrentRoll()).toEqual(2);
    });
  });

  describe('saveScore', function() {
    it("saves the frame, roll & number of pins on each roll", function() {
      for (i=0; i < 3; i++) { game.roll(4); }
      // scoreCard = [{frame: 1, roll: 1, pins: 4}, ... ]
      var lastestRoll = game.scoreCard.length-1
      var frame = game.scoreCard[lastestRoll].frame;
      var roll = game.scoreCard[lastestRoll].roll;
      var pins = game.scoreCard[lastestRoll].pins;
      expect(frame).toEqual(2);
      expect(roll).toEqual(1);
      expect(pins).toEqual(4);
    });
  });
});
