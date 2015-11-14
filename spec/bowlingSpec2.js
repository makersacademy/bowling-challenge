describe("Bowling", function(){

  var game;

  beforeEach( function () {
     game = new Bowling();
  });


  it('can score 0', function() {
    game.manyRolls(0, 20);
      expect(game.score()).toEqual(0);
    });


  it('can roll al 2', function(){
    game.manyRolls(2, 20);
    expect(game.score()).toBe(40);
  });

  it('can roll a spare', function(){
    game.manyRolls(10, 1);
    game.manyRolls(0, 19);
    expect(game.score()).toBe(10);
  });

  it('can roll a spare and normal roll', function(){
    game.manyRolls(10, 1);
    game.manyRolls(2, 1);
    game.manyRolls(0, 18);
    expect(game.score()).toBe(14);
  })
});
