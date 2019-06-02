describe('Bowling', function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame;
  });

  it('the score starts at 0', function() {
    expect(bowlingGame._score).toBe(0);
  });

  it('has 10 frames for each game', function() {
    expect(bowlingGame._frames).toBe(10);
  });

  it('you can roll twice and the score will change', function() {
    bowlingGame.rolls(3, 4)
    expect(bowlingGame._score).toBe(7)
  });

});
