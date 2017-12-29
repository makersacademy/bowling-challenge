describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game()
  });

  it("calculates a gutter game", function(){
    for(var i = 0; i < 20; i++){
      game.roll(0)
    }
    expect(game.score()).toEqual(0);
  });

  it("calculates all ones", function(){
    for(var i = 0; i < 20; i++){
      game.roll(1)
    }
    expect(game.score()).toEqual(20);
  });

});
