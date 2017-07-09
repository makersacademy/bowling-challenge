'use strict';

describe('Play a frame', function () {
  it('updates the scorecard with correct frame scores', function () {
    var game, scorecard;
    game = new Game();
    spyOn(Math, 'random').and.returnValues(0.51, 0.9);
    game.play();
    game.play();
    scorecard = game.getScoreCard();
    console.dir(scorecard.getCard());
    expect(scorecard.getCard()).toEqual([[5, 5]]);
  });
});
