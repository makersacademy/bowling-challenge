const Scorecard = require('./scorecard');
const Bowling = require('./bowling')

describe('Scorecard', () => {
  let scorecard = new Scorecard;
  let game = new Bowling;
  rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6];
  game.inputFullGame(rolls);

  it('shows the pins with strikes and spares formatted accordingly', () => {
    expect(scorecard.showPins(game.frames)).toEqual(
      '1  4 | 4  5 | 6  / | 5  / | X  - | 0  1 | 7  / | 6  / | X  - | 2  /  6'
    );
  });

  it('shows the cumulative totals for each frame', () => {
    expect(scorecard.showTotals(game.frames)).toEqual(
      '   5 |   14 |   29 |   49 |   60 |   61 |   77 |   97 |  117 |  133'
    );
  });

  let ongoingGame = new Bowling;
  it('only shows the total for a frame when it is complete', () => {
    ongoingGame.roll(2)
    expect(scorecard.showTotals(ongoingGame.frames)).toEqual('');
    ongoingGame.roll(4)
    expect(scorecard.showTotals(ongoingGame.frames)).toEqual('   6');
  });

  it('only shows the total for a frame when the bonuses are finished', () => {
    ongoingGame.roll(10)
    expect(scorecard.showTotals(ongoingGame.frames)).toEqual(
      '   6 |     '
    );
    ongoingGame.roll(3)
    expect(scorecard.showTotals(ongoingGame.frames)).toEqual(
      '   6 |     '
    );
    ongoingGame.roll(4)
    expect(scorecard.showTotals(ongoingGame.frames)).toEqual(
      '   6 |   23 |   30'
    );
  });
});
