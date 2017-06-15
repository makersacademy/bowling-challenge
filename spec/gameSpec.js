'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('has an empty array for scores', function(){
    expect(game.scores).toEqual([])
  })

  it('can get a total score from a designated frame', function(){
    expect(game.framescore(1)).toEqual(5)
  });

})
