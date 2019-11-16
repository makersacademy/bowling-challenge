describe('Bowl', function() {

  describe('bowling a ball', function() {

    beforeEach(function() {
      bowl = new Bowl();
    });

    it('player can roll a gutter ball', function() {
      bowl.roll(0)
      expect(bowl.rolls).toEqual([0]);
    });

    it('player can roll a ball and score 1', function() {
      bowl.roll(1)
      expect(bowl.rolls).toEqual([1]);
    });

    it('player can roll 2 balls and score 2', function() {
      bowl.roll(1)
      bowl.roll(1)
      expect(bowl.rolls).toEqual([1, 1]);
    });

    it('can roll two frames ie four shots knocking 1 pin each time', function() {
      for (i = 0; i < 4; i++) {
        bowl.roll(1);
      };
      expect(bowl.rolls).toEqual([1, 1, 1, 1]);
    });

  });

});

describe('Game', function() {

  describe('seeing the score', function() {

    beforeEach(function() {
      game = new Game();
      bowl = new Bowl();
    });

    it('can see the score', function() {
      bowl.roll(1)
      bowl.roll(1)
      total = game.score();
      expect(total).toEqual(2);
    });

    it('can play a full game scoring 0 points', function () {
      for (i = 0; i < 20; i++) {
        bowl.roll(0);
      };
      total = game.score();
      expect(total).toEqual(0);
    });

    it('can play a full game scoring 20 points', function() {
      for (i = 0; i < 20; i++) {
        bowl.roll(1);
      };
      total = game.score();
      expect(total).toEqual(20);
    });

  });

});
