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
    it('adds the score of the second roll, first roll > 5', function() {
      scoreboard.firstRoll(7);
      scoreboard.secondRoll(3);
      expect(scoreboard.scores).toContain(3);
    });

    it('adds the score of the second roll, first roll < 5', function() {
      scoreboard.firstRoll(3);
      scoreboard.secondRoll(7);
      expect(scoreboard.scores).toContain(7);
    });

    it('refuses to add a number above the first roll', function() {
      expect(function() {
        scoreboard.firstRoll(9);
        scoreboard.secondRoll(3);
      }).toThrow("You can't knock down more than 10 pins!");
    });
  });

  beforeEach(function() {
    scoreboard.firstRoll(8);
    scoreboard.secondRoll(2);
  });

  describe('rollScore', function() {

    it('expects the array to have two items', function() {
      expect(scoreboard.scores.length).toEqual(2);
    });

    it('sums the numbers inside the array', function() {
      expect(scoreboard.rollScore()).toEqual(10);
    });
  });

  describe('emptyScores', function() {
    it('empties the scores array', function() {
      scoreboard.emptyScores();
      expect(scoreboard.scores.length).toEqual(0);
    });
  });

  describe('newFrame', function() {

    beforeEach(function() {
      scoreboard.rollScore();
    });

    it('displays the score in a frame', function() {
      scoreboard.newFrame();
      expect(scoreboard.frames).toContain(10);
    });
  });
});
