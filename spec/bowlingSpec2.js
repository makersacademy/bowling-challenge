describe("Bowling", function(){

  var game;

  beforeEach( function () {
     game = new Bowling();
  });

  var manyRolls = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }

  it('can score 0', function() {
    manyRolls(0, 20);
      expect(game.score()).toEqual(0);
    });

  it('can roll al 2', function(){
    manyRolls(2, 8);
    expect(game.score()).toBe(16);
  });

  it('can roll a spare', function(){
    game.roll(5);
    game.roll(5);
    game.roll(3);
    game.roll(4);
    manyRolls(0, 16);
    expect(game.score()).toBe(20 );
  });

  it('can roll a strike', function(){
    manyRolls(10, 1);
    manyRolls(5, 1);
    manyRolls(5, 1);
    manyRolls(1,1);
    manyRolls(0, 16);
    expect(game.score()).toBe(32);
  });

  it('can play a perfect game', function(){
    manyRolls(10, 12);
    expect(game.score()).toBe(300);
  })

  it('has a normal game', function(){
    game.roll(1);
    game.roll(1);
    game.roll(5);
    game.roll(5);
    game.roll(1);
    game.roll(1);
    game.roll(1);
    game.roll(1);
    expect(game.score()).toBe(17);
  });
});
