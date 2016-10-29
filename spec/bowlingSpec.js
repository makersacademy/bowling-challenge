describe('bowling: ', function() {

  var player1;

  beforeEach(function() {
    player1 = new Player();
    roll1 = player1.roll();
    // roll2 = player1.roll();
  });

  it('the player knocks down 0-10 pins when I roll',function() {
    expect(roll1).toBeGreaterThan(-1);
    expect(roll1).toBeLessThan(11);
  });

  describe('scoring: ', function() {

    it('stores the most recent roll', function() {
      expect(score._mostRecentRoll).toEqual(roll1);
    });

    it('moves the "current roll" to "previous roll" when the ball is rolled again', function() {
      roll2 = player1.roll();
      expect(score._previousRoll).toEqual(roll1);
      expect(score._mostRecentRoll).toEqual(roll2);
    });

  });

});
