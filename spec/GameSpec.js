'use strict';
describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

    it("should initialize with a constant of pins", function(){
      expect(game.pins).toEqual([0,1,2,3,4,5,6,7,8,9,10])
    });

    it("should return an empty array when score is initialized", function(){
      expect(game.score).toEqual([]);
    });

    it("should initialize with a frame count of zero", function(){
      expect(game.frameCount).toEqual(0);
    });

    it("should initialize with no pins set up (rack = false)", function(){
      expect(game.rack).toEqual(false);
    });

    it("should load pins", function(){
      game.start()
      expect(game.rack).toEqual(true);
    });



});
