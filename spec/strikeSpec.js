describe('Strike testing', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('rolling a 10 and 18 1s', function() {
    beforeEach(function() {
      game.roll(10);
      for (i = 0; i < 18; i++) {
        game.roll(1);
      }
    });

    it('should have a score of 30', function() {
      expect(game.score()).toEqual(30);
    });
  });

  describe('rolling 10 strikes', function() {
    beforeEach(function() {
      for (i = 0; i < 12; i++) {
        game.roll(10);
      }
    });

    it('should have a score of 270', function() {
      expect(game.score()).toEqual(300);
    });
  });

  describe('rolling strikes until a spare at the end', function() {
    beforeEach(function() {
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 9, 1].forEach(function(num) {
        game.roll(num);
      });
    });
    it('should have a score of 247', function() {
      expect(game.score()).toEqual(32);
    });
  });
});
