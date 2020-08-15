describe('game', function() {
  var game;

  beforeEach ( function() {
    game = new Game('Alexis', 'Grégory');
  })
  
  it ('initiates players', function() {
    expect(game.players.length).toEqual(2)
  })
})