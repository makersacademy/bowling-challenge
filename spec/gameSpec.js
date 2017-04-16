'use strict';

describe('Game', function(){
  var game;
  var frame;
  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  it('expects the game to have 10 frames', function(){
    expect(game.frames.length).toEqual(10);
  });

  it('lets a player start the game', function(){
    spyOn(Math, 'random').and.returnValue(0.3)
    expect(game.startGame(frame)).toEqual(5);
  });

});
