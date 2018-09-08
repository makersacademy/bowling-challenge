describe ('Scoreboard', function() {
  var scoreboard

  beforeEach(function() {
    scoreboard = new Scoreboard();
  });

  it('adds the score of the first roll', function() {
    scoreboard.firstRoll(5);
    expect(scoreboard.scores).toContain(5);
  });

  it('adds the score of the second roll', function() {
    scoreboard.secondRoll(3);
    expect(scoreboard.scores).toContain(3);
  });

});
