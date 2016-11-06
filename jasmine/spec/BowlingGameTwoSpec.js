describe('Bowling game Two', function() {

  var gameTwo;

  beforeEach(function() {
    var gameTwo = new BowlingGameTwo()
  });

  it('can start a game', function() {
  });

  it('rolling a gutter game', function() {
    for (var i=0; i<20; i++) {
      gameTwo.roll(0)
    }
    expect(gameTwo.score()).toEq(0)
  });

});
