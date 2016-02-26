describe('Game', function(){
  var game;
  beforeEach(function(){
    game = new Game();
  });

  it('returns the score', function(){
    game.score(6);
    game.score(2);
    expect(game.total()).toEqual(8);
  });

  it('records the total frames played', function(){
    game.score(6);
    game.score(2);
    expect(game.log).toContain([6, 2]);
  });

  it('calcs strike bonus', function(){
    game.score(10);
    game.score(2);
    game.score(3);
    expect(game.strikeCalc()).toEqual(5);
  });

  it('calcs spare bonus', function(){
    game.score(2);
    game.score(6);
    game.score(5);
    game.score(5);
    game.score(1);
    game.score(2);
    expect(game.spareCalc()).toEqual(1);
  });

  it('checks if extra rolls given after a tenth frame strike', function(){
    for(i = 0; i < 18; i++) {
      game.score(4);
    }
    game.score(10);
    expect(game.extraRolls).toEqual(2)
  });

  it('checks if extra rolls given after a tenth frame spare', function(){
    for(i = 0; i < 18; i++) {
      game.score(4);
    }
    game.score(4);
    game.score(6);
    expect(game.extraRolls).toEqual(1)
  });

  it('checks error is displayed when game over after bonus', function(){
    var error = function() {
         throw new TypeError("start new game");
       };

    for(i = 0; i < 18; i++) {
      game.score(4);
    }
    game.score(10);
    game.score(4);
    game.score(4);
    expect(function(){game.score(4);}).toThrowError("start new game");
  });
});
