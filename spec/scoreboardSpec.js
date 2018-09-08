describe ('Scoreboard', function() {
  var scoreboard

  beforeEach(function() {
    scoreboard = new Scoreboard();
  });

  describe('firstRoll', function() {
    it('adds the score of the first roll', function() {
      scoreboard.firstRoll(5);
      expect(scoreboard.scores).toContain(5);
    });

    it('refuses to add a number above ten', function() {
      expect(function() {
        scoreboard.firstRoll(11);
      }).toThrow("You can't knock down more than 10 pins!");
    });
  });

  describe('secondRoll', function() {
    it('adds the score of the second roll', function() {
      scoreboard.firstRoll(8);
      scoreboard.secondRoll(1);
      expect(scoreboard.scores).toContain(1);
    });

    it('refuses to add a number above the first roll', function() {
      expect(function() {
        scoreboard.firstRoll(9);
        scoreboard.secondRoll(3);
      }).toThrow("You can't knock down more than 10 pins!");
    });
  });

  describe('rollScore', function() {
    it('sums the numbers inside the array', function() {
      scoreboard.firstRoll(8);
      scoreboard.secondRoll(2);
      expect(scoreboard.rollScore()).toEqual(10);
    });

  });


});
