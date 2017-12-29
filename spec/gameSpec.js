describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game()
  });

  it("calculates a gutter game", function(){
    rollMany(20, 0);
    expect(game.calculateScore()).toEqual(0);
  });

  it("calculates all ones", function(){
    rollMany(20, 1);
    expect(game.calculateScore()).toEqual(20);
  });

  it("calculates one spare", function(){
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(17,0);
    expect(game.calculateScore()).toEqual(16);
  });



  function rollMany(rolls, pins){
    for(var i = 0; i < rolls; i++){
      game.roll(pins);
    }
  };

});
