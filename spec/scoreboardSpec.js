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
    var currentGame = game;
    spyOn(Math, 'random').and.returnValue(3);
    let i = 0;
    while(i < 20){ currentGame.takeTurn(); i++ }
    scoreboard.calculateTotalScore(currentGame);
    expect(scoreboard.totalScore).toBe(60);
  });


});