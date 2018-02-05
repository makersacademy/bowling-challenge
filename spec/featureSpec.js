'use strict';

describe('Feature Test:', function(){
  var game;

  beforeEach (function(){
    game = new Game();

  });

  it('scores correctly for a gutter game', function () {
    for (let i = 0; i < 10; i++) {
      game.storeFrame(new Frame([0,0]))
    }
  expect(game.score()).toEqual(0);
  });

});
