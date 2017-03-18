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

  describe('getFrames', function(){

    it('should contain 10 instances of Frame', function(){
      expect(game.getFrames().length).toEqual(10);
      // expect(game.getFrames().every(frame => frame !== undefined)).toBe(true);
      expect(game.getFrames().every(frame => frame instanceof Frame)).toBe(true);
    });

  });

  describe('getTotalScore', function(){

    it('should be zero to begin with', function(){
      expect(game.getTotalScore()).toEqual(0);
    });

  });

});
