"use strict"

describe("#score", function() {

  var game;
  var i;

  beforeEach(function() {
    game = new Game();
  });
  
  
  it("should return a score of 0 when provided with a 20 bowls of zero", function() {
    for (i=0; i < 20; i++) { 
      game.bowl(0) 
    }
    expect(game.score()).toEqual(0);
  });

  it("should return a score of 8 when provided with a roll of 3 then a roll of 5", function() {
    game.bowl(3)
    game.bowl(5)
    expect(game.score()).toEqual(8);
  });

  it('when provided with scores [4,5,10,6,2] total score = 35', function() {
    game.bowl(4)
    game.bowl(5)
    game.bowl(10)
    game.bowl(6)
    game.bowl(2)
    expect(game.score()).toEqual(35);
  });

  it('when provided with 20 bowls of 4, total score = 80', function() {
    for (i=0; i < 20; i++) { 
      game.bowl(4) 
    }
    expect(game.score()).toEqual(80);
  });
});

