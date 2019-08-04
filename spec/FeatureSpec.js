'use strict';

describe('Feature Test: ', function(){
  var game;
  var frameOne;

  beforeEach(function(){
    game = new Game();
    frameOne = new Frame();
  });

  it('bonus points are gifted if there is a strike', function(){
    game.shot(10);
    game.shot(7)
    game.shot(1);
    expect(game.scoreChecker()).toEqual(26);
  });
});
