describe('Spare testing', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('rolling 20 1s with one spare in the middle', function() {
    beforeEach(function() {
      game.roll(1);
      game.roll(9);
      for (i = 0; i < 18; i++) {
        game.roll(1);
      }
    });

    it('should have a score of 29', function() {
      expect(game.score()).toEqual(29);
    });
  });

  describe("rolling (9,1) (8,2) 3*(11) (7,3) (4,2) 3*(44)", function() {
    beforeEach(function() {
      [9, 1, 8, 2, 1, 1, 1, 1, 1, 1, 7, 3, 4, 2, 4, 4, 4, 4, 4, 4].forEach(function(num) {
        game.roll(num);
      });
    });
    it('should have a score of 79', function() {
      expect(game.score()).toEqual(79);
    });
  });

  describe('finishing on a spare', function() {
    beforeEach(function() {
      [10, 10, 10, 10, 10, 10, 10, 10, 1, 1, 9, 1, 4].forEach(function(num) {
        game.roll(num);
      });
    });

    it('should have a score of 233', function() {
      expect(game.score()).toEqual(233);
    });
  });
  // 180 + 21 + 12 + 2 + 14 + 4
});
