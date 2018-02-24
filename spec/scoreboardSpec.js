describe('Scoreboard', function() {
  var scoreboard;
  var bowlingFrame;

  beforeEach(function() {
    scoreboard = new Scoreboard();
    bowlingFrame = {
      total: function() {
        return 8;
      },
      firstRoll: function() {
        return 3;
      },
      secondRoll: function() {
        return 5;
      }
    };
  });

  describe('.score', function() {
    it('gets the current score from relevant frame', function() {
      expect(scoreboard.score(bowlingFrame)).toBe(8);
    });
  });
});
