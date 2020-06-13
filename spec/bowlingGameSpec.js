describe('BowlingGame', function() {

  beforeEach(function () {
    game = new BowlingGame();
  });

  it('should begin with rolls empty', function () {
      expect(game.rolls).toEqual([]);
    });

  it('should return 0 for a gutter game', function () {
    rollTwenty(0,20)
    expect(game.score()).toEqual(0);
  });

  it('should return 20 for an all-1s game', function () {
    rollTwenty(1,20)
    expect(game.score()).toEqual(20);
  });

  function rollTwenty(pins, rolls) {
    for(let i = 0; i < rolls; i++){
      game.roll(pins);
    }
  };

});

