describe('BowlingGame', function() {

  beforeEach(function () {
    game = new BowlingGame();
  });

  it('should begin with no score', function () {
      expect(game.rolls).toEqual([]);
    });

  it('should return 0 for a gutter game', function () {
    rollMany(0,20)
    expect(game.score()).toEqual(0);
  });

  it('should return 20 for an all-1s game', function () {
    rollMany(1,20)
    expect(game.score()).toEqual(20);
  });

  it('can roll a spare', function(){
    game.roll(5)
    game.roll(5)
    game.roll(3)
    rollMany(0,17)
    expect(game.score()).toEqual(16)
  });

  it('can roll a strike', function(){
    game.roll(10)
    game.roll(3)
    game.roll(4)
    rollMany(0,16)
    expect(game.score()).toEqual(24)

  });

  it('can roll a perfect game', function(){
    rollMany(10,12)
    expect(game.score()).toEqual(300)
  })

  function rollMany(pins, rolls) {
    for(let i = 0; i < rolls; i++){
      game.roll(pins);
    }
  };

});

