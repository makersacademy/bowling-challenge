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

  function multiRoll(amount, pins) {
    var i;
    for (i = 0; i < amount; i++) {
      game.roll(pins);
    };
  };

  it

});
