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
    //  expect(game.newFrame).toHaveBeenCalled();
    expect(game.frames).toBeNonEmptyArray();
  });

  it('has maximum 10 frames', function(){
    for(var rolls = 0; rolls < 20; rolls++){
      game.roll(3);
    }
    expect(function(){
      game.roll(3);
    }).toThrowError('No new rolls allowed');
  });

  it('can add the score of the roll to the frame', function(){
    var frame = jasmine.createSpyObj('frame', ['addRoll', 'isComplete']);
    game.frames.push(frame);
    game.roll(3);
    expect(frame.addRoll).toHaveBeenCalledWith(3);
  });

  describe('#getCurrentFrame', function(){

    it('can select the current in play frame', function(){
      game.roll(3);
      expect(game.getCurrentFrame()).toEqual(game.frames[0]);
    });

    it('returns a new frame if the previous frame isComplete', function(){
      game.roll(10);
      var frameStrike = game.frames[0];
      game.roll(2);
      expect(game.frames[-1]).not.toBe(frameStrike);
    });
  });

  describe('#totalScore', function(){

    it('returns 0 for a Gutter game', function(){
      for(var rolls = 0; rolls < 20; rolls++) {
        game.roll(0);
      }
      expect(game.totalScore()).toBe(0);
    });
  });
});
