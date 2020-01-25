'use strict';

describe ("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe("initialize", function(){
    it("starts score at zero", function() {
      expect(game.returnScore()).toEqual(0);
    })


  })


})

