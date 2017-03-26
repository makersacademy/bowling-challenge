'use strict';

describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('new', function(){

    it('should create an instance of Game', function(){
      expect(game instanceof Game).toBe(true);
    });

  });

  describe('#getFrames', function(){

    it('should contain 10 instances of Frame', function(){
      expect(game.getFrames().length).toEqual(10);
    });

  });

  describe('#getTotalScore', function(){

    it('should be zero to begin with', function(){
      expect(game.getTotalScore()).toEqual(0);
    });

  });

  describe('#play', function(){

    it("sets current frame's current roll's knocked pins", function(){
        expect(function(){game.play(4)}).not.toThrow();
    });

  });


});
