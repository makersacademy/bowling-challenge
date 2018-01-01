describe('Scoreboard', () => {
  var frame;
  var game;
  var scoreboard;

  beforeEach(() => {
    frame = new Frame();
    game = new Game();
    scoreboard = new Scoreboard();
  });

  it('can add score of open frames correctly', () => {
    let i = 0;
    while(i < 20){ game.takeTurn(1); i++ }
    scoreboard.calculateTotalScore(game);
    expect(scoreboard.totalScore).toBe(20);
  });

  it('can count the bonus score for a perfect game', () => {
    let i = 0;
    while(i < 10){ game.takeTurn(10); i++ }
    scoreboard.calculateTotalScore(game);
    expect(scoreboard.totalScore).toBe(300);
  });


});