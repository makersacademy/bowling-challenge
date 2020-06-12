describe('BowlingGame', function() {

  beforeEach(function () {
    game = new BowlingGame();
  });

  it('should begin with rolls empty', function () {
      expect(game.rolls).toEqual([]);
    });

  it('should return 0 for a gutter game', function () {
    for(let i = 0; i < 20; i++){
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

});

