
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

  describe('can roll all ones', function() {
    it('can roll all ones', function(){
     for (let i = 0; i < 20; i++) {
      game.bowl(1)
     }
     expect(game.score()).toBe(20)
    })
  })

})