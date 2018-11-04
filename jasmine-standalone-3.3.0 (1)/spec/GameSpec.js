describe('Game', function(){
  it('starts with zero score', function(){
    var game = new Game;
    expect(game.score()).toEqual(0);
  })

  it('scores zero for a gutter game', function(){
    var game = new Game;
    for(i=0;i<20;i++){
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it('scores 1 + 4 rolled pins', function(){
    var game = new Game;
    game.roll(1);
    game.roll(4);
    expect(game.score()).toEqual(5);
  });

  it('scores 4 + 5 rolled pins', function(){
    var game = new Game;
    game.roll(4);
    game.roll(5);
    expect(game.score()).toEqual(9);
  });

  it('scores spare (4 + 6) bonus (+ 5)', function(){
    var game = new Game;
    game.roll(4);
    game.roll(6); // spare
    game.roll(5);
    game.roll(1);
    expect(game.score()).toEqual(21);
  });

  it('scores spare (0 + 10) bonus (+ 4)', function(){
    var game = new Game;
    game.roll(0);
    game.roll(10); // spare
    game.roll(4);
    game.roll(1);
    expect(game.score()).toEqual(19);
  });
});
