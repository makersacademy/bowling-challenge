describe('Bowling game Two', function() {

  var gameTwo;

  it('rolling a gutter game', function() {
    var gameTwo = new BowlingGameTwo()
    for (var i=1; i<21; i++) {
      gameTwo.roll(0);
    }
    expect(gameTwo.score()).toBe(0);
  });

});
