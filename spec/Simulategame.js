'use strict';

describe('Scorer unit tests:', function(){
  var game;

  beforeEach (function(){
      game = new Game();
  });

  it('#play returns true', function() {
    expect(game.play()).toBeTruthy();
  })
});
