'use strict';

describe('Game', function(){
  var Game = require('../lib/game');
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('frame',['firstRoll']);
  });

  it('creates a new frame after the first roll of the game', function(){
    expect(game.frames).toBeEmptyArray();
    spyOn(game, 'newFrame');
    game.roll(2);
    expect(game.newFrame).toHaveBeenCalled();
  });

  it('can add the roll score to the frame', function(){
  });

  it('scores 0 in case of a Gutter game', function() {
    for(var i; i <= 20; i++) {
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  });
});
