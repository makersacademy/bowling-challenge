describe('Bowling', function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame;
  });

  it('the score starts at 0', function() {
    expect(bowlingGame.score).toBe(0);
  });

  it('you can roll twice and the score will change', function() {
    bowlingGame.rolls(3, 4);
    expect(bowlingGame.score).toEqual(7);
  });

  it('score a strike if first roll is 10', function() {
    bowlingGame.rolls(10, 0);
    expect(bowlingGame.isStrike).toBeTruthy();
  });

  it('score a spare is rolls equal 10', function() {
    bowlingGame.rolls(4, 6);
    expect(bowlingGame.isSpare).toBeTruthy();
  });

  it('resets current frame with each new roll', function ()  {
    bowlingGame.rolls(3, 4);
    bowlingGame.rolls(5, 2);
    expect(bowlingGame.currentFrame[0]).toEqual(5);
  });

});
