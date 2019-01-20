describe('Game', ()=> {

  it('player rolls a gutter game', ()=> {
    var game = new Game();
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

}); // end of describe 'Game'
