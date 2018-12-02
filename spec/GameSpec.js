describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();

  });

  it('is a game', function() {
    expect(game).toEqual(jasmine.any(Game));
  });

  it('starts with no completed frames', function(){
    expect(game.frames()).toEqual([]);
  });

  it('calculates a gutter game', function(){
    multiRoll(20, 0);
    expect(game.score()).toEqual(0);
  });

  it('calculates a non gutter, spares or strikes game', function(){
    multiRoll(20, 1);
    expect(game.score()).toEqual(20);
  });

  it('calculates a game with one spare', function(){
    game.roll(5);
    game.roll(5);
    game.roll(1);
    multiRoll(17, 0);
    expect(game.score()).toEqual(12);
  });

  it('calculates a game with two spares', function(){
    game.roll(5);
    game.roll(5);
    game.roll(1);
    game.roll(0);
    game.roll(5);
    game.roll(5);
    game.roll(1);
    game.roll(0);
    multiRoll(12, 0);
    expect(game.score()).toEqual(24);
  });

  it('calculates a game with one strike', function(){
    game.roll(10);
    game.roll("X");
    game.roll(1);
    multiRoll(17, 0);
    expect(game.score()).toEqual(12);
  });

  it('calculates a game with non-consecutive strikes', function(){
    game.roll(10);
    game.roll("X");
    game.roll(5);
    game.roll(1);
    game.roll(10);
    game.roll("X");
    game.roll(1);
    multiRoll(13, 0);
    expect(game.score()).toEqual(34);
  });

  it('calculates a game with consecutive strikes', function(){
    game.roll(10);
    game.roll("X");
    game.roll(10);
    game.roll("X");
    game.roll(5);
    game.roll(0);
    multiRoll(14, 0);
    console.log(game._frames)
    expect(game.score()).toEqual(45);
  });


  function multiRoll(amount, pins) {
    var i;
    for (i = 0; i < amount; i++) {
      game.roll(pins);
    };
  };

});
