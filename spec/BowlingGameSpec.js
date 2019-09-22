'use strict';

describe('Game', function(){
  var game

  beforeEach(function(){
    game = new BowlingGame();
  });
  
  it('total score is 0 if no pins are knocked in any frame', function(){
    for(var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

});
