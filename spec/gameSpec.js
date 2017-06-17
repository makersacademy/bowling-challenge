'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('instantiates with at least one frame', function(){
    expect(game.frame1).toBeDefined();
  });

  it('instantiates with ten frames', function(){
    expect(game.frame2).toBeDefined();
    expect(game.frame3).toBeDefined();
    expect(game.frame4).toBeDefined();
    expect(game.frame5).toBeDefined();
    expect(game.frame6).toBeDefined();
    expect(game.frame7).toBeDefined();
    expect(game.frame8).toBeDefined();
    expect(game.frame9).toBeDefined();
    expect(game.frame10).toBeDefined();
  });

  it('has an an empty array for scores', function(){
    expect(game.scores).toEqual([])
  })


})
