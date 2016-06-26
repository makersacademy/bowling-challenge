'use strict';

describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('is initialized with an array of 10 empty arrays', function(){
    expect(game.frames.length).toEqual(10);
  });

  it('#roll adds the pins knocked down to the current frame (when no strike or spare)', function(){
    game.roll(2);
    game.roll(3);
    game.roll(4);
    game.roll(1);
    expect(game.frames[0]).toEqual([2, 3]);
    expect(game.frames[1]).toEqual([4, 1]);
  });

  it('#roll adds the pins knocked down to the current frame (when spare)', function(){
    game.roll(7);
    game.roll(3);
    game.roll(4);
    expect(game.frames[0]).toEqual([7, 3]);
    expect(game.frames[1]).toEqual([4]);
  });

  it('#score determines the score of the game so far (when no strikes or spares)', function(){
    game.roll(2);
    game.roll(3);
    game.roll(6);
    game.roll(1);
    expect(game.score).toEqual(12);
  });

  it('#score determines the score of the game so far (when spare)', function(){
    game.roll(7);
    game.roll(3);
    game.roll(6);
    game.roll(1);
    expect(game.score).toEqual(23);
  });

   it('#score determines the score of the game so far (when strike)', function(){
    game.roll(10);
    game.roll(6);
    game.roll(1);
    expect(game.score).toEqual(24);
  });

});