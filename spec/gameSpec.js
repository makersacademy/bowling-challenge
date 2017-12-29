describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game()
  });

  it("calculates a gutter game", function(){
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it("calculates all ones", function(){
    rollMany(20, 1);
    expect(game.score()).toEqual(20);
  });

  function rollMany(rolls, pins){
    for(var i = 0; i < rolls; i++){
      game.roll(pins);
    }
  };

});
