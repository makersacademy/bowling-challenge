describe('Bowling game Two', function() {

  var gameTwo;

  beforeEach(function() {
    gameTwo = new BowlingGameTwo
  });

  it('rolling a gutter game', function() {
    rollBall(0,20)
    expect(gameTwo.score()).toBe(0);
  });

  it('roll 1 and 1 pin, for 10 frames', function() {
    rollBall(1,20)
    expect(gameTwo.score()).toBe(20);
  });

  var rollBall = function(pins,rolls) {
    for (var i = 0; i < rolls; i++) {
      gameTwo.roll(pins);
    }
  };

});
