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
    game.play()
    expect(game.score()).toEqual(0);
  });

  it("should return a score of 8 when provided with a roll of 3 then a roll of 5", function() {
    game.bowl(3)
    game.bowl(5)
    game.play()
    expect(game.score()).toEqual(8);
  });

  it('when provided with scores [4,5,10,6,2] total score = 35', function() {
    game.bowl(4)
    game.bowl(5)
    game.bowl(10)
    game.bowl(6)
    game.bowl(2)
    game.play()
    expect(game.score()).toEqual(35);
  });

  it('when provided with 20 bowls of 4, total score = 80', function() {
    for (i=0; i < 20; i++) { 
      game.bowl(4) 
    }
    game.play()
    expect(game.score()).toEqual(80);
  });

  it('when provided with 12 bowls of 10, total score = 300', function() {
    for (i=0; i < 12; i++) { 
      game.bowl(10) 
    }
    game.play()
    expect(game.score()).toEqual(300);
  });

  it('when provided with [8,2,10,8,2,8,2,4,4,9,1,4,2], total score = 300', function() {
    var bowls = [8,2,10,8,2,8,2,4,4,9,1,4,2]
    for (i=0; i < 13; i++) { 
      game.bowl(bowls[i]) 
    }
    game.play()
    expect(game.score()).toEqual(100);
  });
  it('when provided with [10,10,10,10,10,10,10,10,10,8,2,10], total score = 278', function() {
    var bowls = [10,10,10,10,10,10,10,10,10,8,2,10]
    for (i=0; i < 12; i++) { 
      game.bowl(bowls[i]) 
    }
    game.play()
    expect(game.score()).toEqual(278);
  });
  it('when provided with [10,10,10,10,10,10,10,10,8,2,8,2,10], total score = 266', function() {
    var bowls = [10,10,10,10,10,10,10,10,8,2,8,2,10]
    for (i=0; i < 13; i++) { 
      game.bowl(bowls[i]) 
    }
    game.play()
    expect(game.score()).toEqual(266);
  });
  it('when provided with [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6], total score = 133', function() {
    var bowls = [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6]
    for (i=0; i < 19; i++) { 
      game.bowl(bowls[i]) 
    }
    game.play()
    expect(game.score()).toEqual(133);
  });
});

