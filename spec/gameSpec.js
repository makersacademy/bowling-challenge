'use strict';

describe('Game',function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  it('can roll a gutter game',function() {
    for(let i=0; i<20; i++) {
      game.roll(0)
    };
    expect(game.score()).toBe(0)
  });

  it('can roll a game',function() {
    for(let i=0; i<20; i++) {
      game.roll(1)
    };
    expect(game.score()).toBe(20)
  });

  it('can roll a spare',function() {
    game.roll(3);
    game.roll(7);
    game.roll(5);
    for(let i=0; i<18; i++) {
      game.roll(0)
    };
    expect(game.score()).toBe(20)
  });

  it('can roll a strike',function() {
    game.roll(10);
    game.roll(5);
    game.roll(4);
    for(let i=0; i<17; i++) {
      game.roll(0)
    };
    expect(game.score()).toBe(28)
  });

  // it('can roll additional balls if strike or spare on the 10th frame',function() {
  //   for(let i=0; i<19; i++) {
  //     game.roll(1)
  //   };
  //   game.roll(2);
  //   game.roll(8);
  //   game.roll(6);
  //   expect(game.score()).toBe(34)
  // });

  it('can roll a perfect game',function() {
    for(let i=0; i<13; i++){
      game.roll(10)
    }
    expect(game.score()).toBe(300)
  });


});

