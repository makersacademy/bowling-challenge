'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    game.recordScore(3);
    game.recordScore(4);
    game.recordScore(5);
  });

  it('records the score from a frame', function(){
    expect(game.score[game.score.length - 1]).toEqual(5);
  });

  it('keeps track of the score across frames', function(){
    expect(game.totalScore()).toEqual(12);
  });

  it('knows what frame it is', function(){
    expect(game.isFrame()).toEqual(2);
  });

  it('only plays 10 frames', function(){
    for ( var i = 0; i < 200; i++ ) {
      game.recordScore(4);
    }
    expect(game.totalScore()).toEqual(80);
    expect(game.over).toEqual(true);
  });
});
