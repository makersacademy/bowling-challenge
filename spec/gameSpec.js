'use-strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('records the score from a frame', function(){
    var pins = 4;
    game.recordScore(pins);
    expect(game.score[game.score.length - 1]).toEqual(4);
  });

  it('keeps track of the score across frames', function(){
    game.recordScore(6);
    game.recordScore(7);
    game.recordScore(8);
    expect(game.totalScore()).toEqual(21);
  });
});
