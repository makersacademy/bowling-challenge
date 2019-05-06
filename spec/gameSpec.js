describe('Game', function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('can calculate a gutter game', function(){
    for (i = 0; i < 20; i ++) {
    game.inputScore(0);
    }
    expect(game.total).toEqual(0);
    });

  it('can calculate the running total of scores', function(){
    game.inputScore(5);
    game.inputScore(2);
    expect(game.total).toEqual(7);
  });

  it('adds each complete frame to scores array', function(){
    game.inputScore(5);
    game.inputScore(2);
    expect(game.scores).toContain([5, 2])
  });

  it('can recognise a throw as a strike', function(){
    game.inputScore(10);
    expect(game.isStrike).toBeTruthy();
  });

  it('can recognise a throw as a spare', function(){
    game.inputScore(2);
    game.inputScore(8);
    expect(game.isSpare).toBeTruthy();
  });

  it('calculates special scoring for a spare', function(){
    game.inputScore(4);
    game.inputScore(5);
    game.inputScore(6);
    game.inputScore(4);
    game.inputScore(5);
    game.inputScore(3);
    expect(game.total).toEqual(32)
  })

});
