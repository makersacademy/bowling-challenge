'use strict';

describe ("Game", function() {

  var game

  beforeEach(function(){
    game = new Game
  });

  describe ("Upon instantiating", function() {

    it("is defined", function() {

      expect(game).toBeDefined();

    });

  });

});
