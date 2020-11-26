'use strict';

describe('Feature test', function(){
  let game;
  
  beforeEach(function(){
    game = new Game();
  })

  it('can score a single frame of 0s', function(){
    for (var i = 0; i < 2; i ++){
      game.bowl(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('can score a regular frame of 2s', function(){
    for (var i = 0; i < 2; i ++){
      game.bowl(2);
    }
    expect(game.score()).toEqual(4);
  })

  it('can score a gutter game', function(){
    for (var i = 0; i < 20; i ++){
      game.bowl(0);
    }
    expect(game.score()).toEqual(0);
  })

  it('can score a game of all 2s', function(){
    for (var i = 0; i < 20; i ++){
      game.bowl(2);
    }
    expect(game.score()).toEqual(40);
  })

  it('can score a spare followed by a 2', function(){
    for (var i = 0; i < 2; i ++){
      game.bowl(5);
    }
    game.bowl(2);
    for (var i = 0; i < 17; i ++){
      game.bowl(0);
    }
    expect(game.score()).toEqual(14);
  })

  it('can score a strike followed by a double 2', function(){
    game.bowl(10)
    for (var i = 0; i < 2; i ++){
      game.bowl(2);
    }
    for (var i = 0; i < 16; i ++){
      game.bowl(0);
    }
    expect(game.score()).toEqual(18);
  })

  it('correctly scores spares in final frame', function(){
    for (var i = 0; i < 18; i ++){
      game.bowl(0);
    }
    for (var i = 0; i < 2; i ++){
      game.bowl(5);
    }
    game.bowl(2);
    expect(game.score()).toEqual(12);
  })

  it('can score three strikes in the final frame', function(){
    for (var i = 0; i < 18; i ++){
      game.bowl(0);
    }
    for (var i = 0; i < 3; i ++){
      game.bowl(10);
    }
    expect(game.score()).toEqual(30);
  })

  it('can score a strike followed by a strike and a regular roll', function(){
    game.bowl(10);
    game.bowl(10);
    game.bowl(4);
    game.bowl(2);
    expect(game.score()).toEqual(46)
  })

  it('can score a perfect game', function(){
    for (var i = 0; i < 12; i ++){
      game.bowl(10);
    }
    expect(game.score()).toEqual(300);
  })

  it('can score a complicated game with spares and strikes', function(){
    game.bowl(1);
    game.bowl(4);
  
    game.bowl(4);
    game.bowl(5);
  
    game.bowl(6);
    game.bowl(4);
  
    game.bowl(5);
    game.bowl(5);
  
    game.bowl(10);
  
    game.bowl(0);
    game.bowl(1);
  
    game.bowl(7);
    game.bowl(3);
  
    game.bowl(6);
    game.bowl(4);
  
    game.bowl(10);
  
    game.bowl(2);
    game.bowl(8);
    game.bowl(6);
    expect(game.score()).toEqual(133);
  })

  it('prevents user from hitting too many pins on first roll', function(){
    expect(function(){ game.bowl(12); }).toThrowError("There aren't that many pins!");
  })

  it('prevents user from hitting too many pins on second roll', function(){
    game.bowl(8)
    expect(function(){ game.bowl(3); }).toThrowError("There aren't that many pins!");
  })
  
  describe('Game Over', function(){
    it("returns 'game over' at end of game", function(){
      for (var i = 0; i < 20; i ++){
        game.bowl(0);
      }
      expect(game.bowl(2)).toEqual("GAME OVER");
    });

    it("returns 'game over' at end of bonus frame", function(){
      for (var i = 0; i < 12; i ++){
        game.bowl(10);
      }
      expect(game.bowl(2)).toEqual("GAME OVER");
    });

    it("doesn't continue to add rolls to score", function(){
      for (var i = 0; i < 21; i ++){
        game.bowl(2);
      }
      expect(game.score()).toEqual(40);
    });
  })

  describe('invalidRoll', function(){
    it('Returns true if roll is invalid', function(){
      game.bowl(2)
      expect(game.isInvalidRoll(9)).toEqual(true);
    })

    it('Returns true if player tries to roll more than 10', function(){
      expect(game.isInvalidRoll(12)).toEqual(true);    
    })

    it('Returns false if roll is valid', function(){
      game.bowl(3)
      expect(game.isInvalidRoll(4)).toEqual(false);
    })

    it('Returns false if roll if valid in final frame', function(){
      for (var i = 0; i < 18; i ++){
        game.bowl(2);
      }
      game.bowl(10)
      game.bowl(10)
      expect(game.isInvalidRoll(5)).toEqual(false);
    })
  })
  
});