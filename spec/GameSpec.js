describe('Game', ()=> {

  var game;

  beforeEach( ()=> {
    game = new Game();
  });

  it('player rolls a gutter game', ()=> {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score(0)).toEqual(0);
  });

  it('player rolls all ones', ()=> {
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score(20)).toEqual(20);
  });

  it('player starts the game from frame 1', ()=>{
    expect(game.frame()).toEqual(1);
  });

}); // end of describe 'Game'
