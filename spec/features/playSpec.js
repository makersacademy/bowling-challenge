'use strict';

describe('Play', function () {
  it('updates the scorecard with correct frame scores after normal frame', function () {
    var game, scorecard;
    game = new Game();
    spyOn(Math, 'random').and.returnValues(0.2, 0.6, 0.1);
    game.play();
    game.play();
    game.play();
    scorecard = game.getScoreCard();
    expect(scorecard.getCard()).toEqual([[2, 5], [1]]);
  });
  it('updates the scorecard with correct frame scores after spare', function () {
    var game, scorecard;
    game = new Game();
    spyOn(Math, 'random').and.returnValues(0.51, 0.9, 0.1);
    game.play();
    game.play();
    game.play();
    scorecard = game.getScoreCard();
    expect(scorecard.getCard()).toEqual([[5, 5, 1], [1]]);
  });
  it('play a gutter game', function () {
    var game, scorecard;
    game = new Game();
    spyOn(Math, 'random').and.returnValue(0);
    for (var i = 0; i < 20; i++) {
      game.play();
    }
    scorecard = game.getScoreCard();
    expect(scorecard.getCard().length).toEqual(10);
    expect(game.getTotalScore()).toEqual(0);
  });
  it('ends after 10 frames if no strike on final frame', function () {
    var game = new Game();
    console.log = jasmine.createSpy('log');
    spyOn(Math, 'random').and.returnValue(0);
    for (var i = 0; i < 21; i++) {
      game.play();
    }
    expect(console.log).toHaveBeenCalledWith('Game over!');
  });
  // it('ends after 11 frames if strike on 10th frame', function () {
  //   var game, scorecard;
  //   game = new Game();
  //
  //   console.log = jasmine.createSpy('log');
  //   spyOn(Math, 'random').and.returnValue(0);
  //   for (var i = 0; i < 18; i++) {
  //     game.play();
  //   }
  //   Math.random.calls.reset();
  //   spyOn(Math, 'random').and.returnValues(10, 0);
  //   game.play();
  //   game.play();
  //   Math.random.calls.reset();
  //   spyOn(Math, 'random').and.returnValue(0);
  //   for (var i = 0; i < 3; i++) {
  //     game.play();
  //   }
  //   expect(console.log).toHaveBeenCalledWith('Game over!');
  // });
});
