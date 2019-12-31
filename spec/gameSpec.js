

describe('Game',function(){

  

  it('Can roll gutter', function() {
    let game = new Game()
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  })
})