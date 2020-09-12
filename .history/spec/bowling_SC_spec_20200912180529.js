
describe('bowlingGame', function() {

  it('can create new game', function() {
    let game = new bowlingGame();

  });

  it('can roll a gutter game', function() {
    let game = new bowlingGame();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score).toBe(0);

  });


});