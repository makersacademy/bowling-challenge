describe('Game', ()=> {

  it('player rolls a gutter game', ()=> {
    var game = new Game();
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score(0)).toEqual(0);
  });

  it('player rolls all ones', ()=> {
    var game = new Game();
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score(20)).toEqual(20);
  });

}); // end of describe 'Game'
