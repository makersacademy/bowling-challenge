'use strict';

describe('Game',function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  // it('can keep scores',function() {
  //   expect(game.score()).toBe(5)
  // });

  it('can roll a gutter game',function() {
    var i;
    for(i=0; i<20; i++) {
      game.roll(0)
    };
    expect(game.score()).toBe(0)
  });



});