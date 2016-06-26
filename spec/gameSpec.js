describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  function rollMany(rolls, pins){
    for(var i = 0; i < rolls; i++){
      game.roll(pins);
    }
  };

  function rollSpare(){
    game.roll(5);
    game.roll(5);
  };



  it('is a gutter a game', function(){
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  it('rolls all ones', function(){
    rollMany(20, 1)
    expect(game.score()).toBe(20);
  });

  it('rolls a spare', function(){
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toBe(16);
  });

});
