describe('Game', function() {
  let game
  let scorecard

  beforeEach(function() {
    game = new Game
    scorecard = createSpyObj('scorecard', ['add_score', 'calculate_score', 'game_over?'])
  })
})