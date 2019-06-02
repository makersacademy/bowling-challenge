describe('Bowling', function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame;
  });

  it('the score starts at 0', function() {
    expect(bowlingGame._score).toBe(0);
  });

  it('has 10 frames for each game', function() {
    expect(bowlingGame._maxFrames).toBe(10);
  });

  it('you can roll twice and the score will change', function() {
    bowlingGame.rolls(3, 4)
    expect(bowlingGame._score).toBe(7);
  });
  it('you score a strike if you knock down 10 pins on your first roll', function() {
    expect(bowlingGame.rolls(10, 0)).toBe('Strike');
  });

  it('you score a spare if you know down 10 pins with 2 rolls', function() {
    expect(bowlingGame.rolls(6,4)).toBe('Spare');
  });

  it('after 2 rolls you move onto the next frame', function() {
    bowlingGame.rolls(3, 5);
    expect(bowlingGame._currentFrame).toBe(2);
  })

});
