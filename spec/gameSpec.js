'use strict';

describe('Game', function(){
  var Game = require('../lib/game');
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('creates a new frame after the first roll of the game', function(){
    expect(game.frames).toBeEmptyArray();
    // spyOn(game, 'newFrame');
    game.roll(2);
    // expect(game.newFrame).toHaveBeenCalled();
    expect(game.frames).toBeNonEmptyArray();
  });

  it('can add the roll score to the frame', function(){
    var frame = jasmine.createSpyObj('frame', ['addRoll']);
    game.frames.push(frame);
    game.roll(3);
    expect(frame.addRoll).toHaveBeenCalledWith(3);
  });

  it('scores 0 in case of a Gutter game', function(){
    for(var i; i <= 20; i++) {
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  });

  describe('#getCurrentFrame', function(){

    it('can select the current in play frame', function(){
      game.roll(3);
      expect(game.getCurrentFrame()).toEqual(game.frames[0]);
    });

    it('returns a new frame if the frame isComplete', function(){
      game.roll(10);
      var frameStrike = game.frames[0];
      game.roll(2);
      expect(game.frames[-1]).not.toBe(frameStrike);
    });
  });
});
