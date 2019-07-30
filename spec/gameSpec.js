'use strict';

describe ('Game', function(){

  var game;

  beforeEach (function(){
    game = new Game
  });

  describe('.start', function() {
    it('records two throws if not a strike', function() {
      set_user_input(3)
      game.start()

    })
  })

})
