'use strict';

describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('is initialized with an array of 10 empty arrays', function(){
    expect(game.frames.length).toEqual(10);
  });

  it('#roll adds the pins knocked down to the current frame', function(){
    game.roll(2);
    game.roll(3);
    game.roll(4);
    game.roll(1);
    expect(game.frames[0]).toEqual([2, 3]);
    expect(game.frames[1]).toEqual([4, 1]);
  });

  // it('#updateScore adds the number of pins knocked down to the current score array then calls the addBonuses method', function(){
  //   game.roll(7);
  //   expect(game.score).toEqual([7,0,0,0,0,0,0,0,0,0]);
  //   expect(game.addBonuses).toHaveBeenCalled;
  // });

  it('#totalScore determines the score of the game so far (when no strikes or spares)', function(){
    game.roll(2);
    game.roll(3);
    game.roll(6);
    game.roll(1);
    expect(game.totalScore()).toEqual(12);
  });

  it('#totalScore determines the score of the game so far (when spare)', function(){
    game.roll(7);
    game.roll(3);
    game.roll(6);
    game.roll(1);
    expect(game.totalScore()).toEqual(23);
  });

   it('#totalScore determines the score of the game so far (when strike)', function(){
    game.roll(10);
    game.roll(6);
    game.roll(1);
    expect(game.totalScore()).toEqual(24);
  });

  it('#totalScore determines the score of the game so far (with sequential strikes and spares)', function(){
    game.roll(6)
    game.roll(4)
    game.roll(10)
    game.roll(10)
    game.roll(8)
    game.roll(2)
    for(var i = 0; i < 8; i++) {
      game.roll(10);
    };
    expect(game.totalScore()).toEqual(268)
  });

  it('#totalScore determines the score of the game so far (with sequential strikes and spares)', function(){
    for(var i = 0; i < 5; i++) {
      game.roll(i+1);
    };
    for(var i = 0; i < 5; i++) {
      game.roll(i+1);
    };
    for(var i = 0; i < 5; i++) {
      game.roll(i+1);
    };
    for(var i = 0; i < 5; i++) {
      game.roll(i+1);
    };
    expect(game.totalScore()).toEqual(60)
  });

});