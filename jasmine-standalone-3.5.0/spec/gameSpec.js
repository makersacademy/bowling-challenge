describe('bowling', function() {

  let game;
  
  beforeEach(function() {
    game = new bowlingGame()
  })

  it('can roll a game of zeros', function() {
    for(let i = 0; i < 20; i++) {game.roll(0)}
    expect(game.score()).toBe(0)
  })

})