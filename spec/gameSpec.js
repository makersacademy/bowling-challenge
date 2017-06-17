'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('instantiates with at an array of Frame objects', function(){
    expect(game.frameArray).toBeDefined();
  });

  it('has ten frames in frameArray', function(){
    expect(game.frameArray.length).toEqual(10)
  });

  it('has an an empty array for scores', function(){
    expect(game.scores).toEqual([])
  })


})
