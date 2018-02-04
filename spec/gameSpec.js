'use strict';

describe('game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('score starts at zero', function() {
    expect(game.score).toEqual(0)
  });

  it('increases in score with point_increase()', function() {
    game.point_increase();
    expect(game.score).toEqual(1)
  });

//   it('increases in score with increaseScore()', function() {
//     score.increaseScore();
//     score.currentScore() = 1;
//     expect(score.currentScore()).toEqual(1);
//   });
});
