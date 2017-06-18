'use strict';

describe('Game', function(){
  var Game = require('../lib/game');
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['firstRoll']);
  });

//  it('creates a new frame after the first roll of the game', function(){
//    expect(game.frames).toBeEmptyArray();
//    spyOn(game, 'newFrame');
//    game.roll(2);
//    expect(game.newFrame).toHaveBeenCalled();
//  });

  it('can select the current in play frame', function(){
    game.roll(3);
    expect(game.getCurrentFrame()).toEqual(game.frames[0]);
  });

  it('can add the roll score to the frame', function(){
    game.frames.push(frame);
    game.roll(3);
    expect(frame.firstRoll).toHaveBeenCalledWith(3);
  });

  it('scores 0 in case of a Gutter game', function(){
    for(var i; i <= 20; i++) {
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  });
});
