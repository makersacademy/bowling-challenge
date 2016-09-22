describe('Bowling Game', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  describe('can roll the correct cumulative score for', function() {

    it('a gutter game', function() {
      rollMany(0, 20);
      expect(game.score(10)).toBe(0);
    });

    it('all ones', function() {
      rollMany(1, 20);
      expect(game.score(10)).toBe(20);
    });

    it('a spare', function() {
      rollSpare();
      game.roll(3);
      rollMany(0, 17);
      expect(game.score(10)).toBe(16);
    });

    it('a strike', function() {
      rollStrike();
      game.roll(4);
      game.roll(3);
      rollMany(0, 16);
      expect(game.score(10)).toBe(24);
    });

    it('a perfect game', function() {
      rollMany(10, 12);
      expect(game.score(10)).toBe(300);
    });

  });

  describe('can display the correct score for', function() {

    it('two non-spare/non-strike rolls', function() {
      rollMany(5, 1);
      rollMany(2, 1);
      expect(game.scoresArray).toEqual([5, 2]);
    });

    it('a game of all fours', function() {
      rollMany(4, 20);
      expect(game.scoresArray).toEqual([4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]);
    });

    it('a strike and a spare', function() {
      rollMany(10, 1);
      rollMany(5, 2);
      expect(game.scoresArray).toEqual([10, 'X', 5, '/']);
    });

    it('a perfect game', function() {
      rollMany(10, 12);
      expect(game.scoresArray).toEqual([10,'X',10,'X',10,'X',10,'X',10,'X',10,'X',10,'X',10,'X',10,'X',10,10,10]);
    });

    it('a gutter game', function() {
      rollMany(0, 20);
      expect(game.scoresArray).toEqual([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    });
  });



  function rollMany(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
  }
});
