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
    rollASpare();
    game.roll(3);
    rollMany(17,0);
    expect(game.calculateScore()).toEqual(16);
  });

  it("calculates one spare in the middle", function(){
    rollMany(2, 1);
    rollASpare();
    game.roll(1);
    rollMany(15,0);
    expect(game.calculateScore()).toEqual(14);
  });

  it("calculates one strike", function(){
    game.roll(10);
    rollMany(2, 1);
    rollMany(17,0);
    expect(game.calculateScore()).toEqual(14);
  });

  it("calculates one strike in the middle", function(){
    rollMany(2, 1);
    rollAStrike();
    rollMany(2, 1);
    rollMany(15,0);
    expect(game.calculateScore()).toEqual(16);
  });

  it("calculates 12 strikes", function(){
    rollMany(12,10);
    expect(game.calculateScore()).toEqual(300);
  });

  function rollMany(rolls, pins){
    for(var i = 0; i < rolls; i++){
      game.roll(pins);
    }
  }

  function rollASpare(){
    game.roll(5);
    game.roll(5);
  }

  function rollAStrike(){
    game.roll(10);
  }

});
