'use strict';

describe('Bowling', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('should return an empty array', function(){
    expect(game.roll).toEqual([]);
  });
});
