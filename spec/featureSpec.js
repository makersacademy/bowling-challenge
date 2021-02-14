'use strict';

describe('Feature Test:', function(){
  var game;
  // var bonus;

  beforeEach(function() {
    game = new Game();
  });

  describe('#input.bowl', function() {
    it('inputting a bowl initializes a Frame to store rolls', function() {
      game.input_bowl(3);
      game.input_bowl(5);
      expect(game.frames[game.frames.length - 1].rolls).toEqual([3,5]);
    })


  })
})
