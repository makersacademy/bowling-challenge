describe('Bowling game Two', function() {

  var gameTwo;

  beforeEach(function() {
    gameTwo = new BowlingGameTwo()
  });

  it('rolling a gutter game', function() {
    rollBall(0,20)
    expect(gameTwo.score()).toBe(0);
  });

  it('roll 1 and 1 pin, for 10 frames', function() {
    rollBall(1,20)
    expect(gameTwo.score()).toBe(20);
  });

  it('rolling a spare',function() {
    gameTwo.roll(5)
    gameTwo.roll(5)
    gameTwo.roll(2)
    rollBall(0,17)
    expect(gameTwo.score()).toBe(14);
  });

  it('rolling a strike',function() {
    gameTwo.roll(10)
    gameTwo.roll(5)
    gameTwo.roll(2)
    rollBall(0,16)
    expect(gameTwo.score()).toBe(24);
  });

  it('rolling a pefect game',function() {
    rollBall(10,12)
    expect(gameTwo.score()).toBe(300);
  });

  var rollBall = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      gameTwo.roll(pins);
    }
  };

});
