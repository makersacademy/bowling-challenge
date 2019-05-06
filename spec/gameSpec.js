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
  });
