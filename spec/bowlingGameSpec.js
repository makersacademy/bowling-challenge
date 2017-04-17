
describe ("bowling game", function() {


  var game;

  beforeEach( function() {
    game = new BowlingGame();

  });

  it('should be able to roll a gutter game', function() {
    multiRoll(0, 20)
    expect(game.score()).toEqual(0)
  });

  it('should be able to have a score of 5 after one frame', function() {
    game.roll(2);
    game.roll(3);
    multiRoll(0, 18)
    expect(game.score()).toEqual(5)
  });


  it('should be able to have a score of 12 after two frames', function() {
      game.roll(2);
      game.roll(3);
      game.roll(2);
      game.roll(5);
      multiRoll(0, 16)
    expect(game.score()).toEqual(12)
  });


  it('should be able to roll a spare', function () {
    game.roll(6);
    game.roll(4);
    game.roll(2);
    multiRoll(0, 17)
    expect(game.score()).toEqual(14)

  });

  it('should be able to roll a strike', function() {
    game.roll(10);
    game.roll(4);
    game.roll(2);
    multiRoll(0,16)
    expect(game.score()).toEqual(22)

  });

  it('should be able to roll a perfect game', function () {
    multiRoll(10, 12);
    expect(game.score()).toEqual(300)
  });


  var multiRoll = function(pins, rolls) {
    for(i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

});
