
'use strict';

describe('Bowl', function() {
  let game;

  beforeEach(function() {
    game = new Game;
  });

  describe('guttergame', function() {
    it('can roll all zeros' , function() {
    for (var i = 0; i < 20; i++) {
      game.bowl(0);
    }
    expect(game.score()).toBe(0)
    })
  })

})