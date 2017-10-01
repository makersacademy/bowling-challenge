'use strict';

describe('Bowling app does the following', function() {
  var game;

  beforeEach(function() {
    game =  new Game();
  })

  it('starts with a score of zero', function() {
    expect(game.score).toEqual(0);
  });

  it('starts with an empty holder for frames', function(){
    expect(game.frames).toEqual([]);
  });

})
