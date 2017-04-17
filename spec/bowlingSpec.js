describe("Bowling", function(){

  var game;

  beforeEach( function () {
     game = new Bowling();
  });

  var manyRolls = function(hit1, hit2, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(hit1, hit2);
    }
  }

  it('can score 0', function() {
    manyRolls(0, 0, 20);
      expect(game.score()).toEqual(0);
    });

  it('can roll al 2', function(){
    manyRolls(2, 0, 8);
    expect(game.score()).toBe(16);
  });

  it('can roll a spare', function(){
    game.roll(5, 5);
    game.roll(3, 0);
    game.roll(0, 0);
    manyRolls(0, 0, 7);
    expect(game.score()).toBe(16);
  });

  it('can roll a strike', function(){
    game.roll(10);
    game.roll(5, 1);
    game.roll(5, 1);
    manyRolls(0, 0, 8);
    expect(game.score()).toBe(28);
  });

  it('can play a perfect game', function(){
    manyRolls(10,0,11);
    expect(game.score()).toBe(300);
  })

  it('has a normal game', function(){
    game.roll(1, 1);
    game.roll(5, 5);
    game.roll(1, 1);
    game.roll(1, 1);
    expect(game.score()).toBe(17);
  });
});
