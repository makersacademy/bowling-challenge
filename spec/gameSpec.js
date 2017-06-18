'use-strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    game.recordScore(6);
    game.recordScore(7);
    game.recordScore(8);
  });

  it('records the score from a frame', function(){
    expect(game.score[game.score.length - 1]).toEqual(8);
  });

  it('keeps track of the score across frames', function(){
    expect(game.totalScore()).toEqual(21);
  });

  it('knows what frame it is', function(){
    expect(game.isFrame()).toEqual(2);
  });
});
