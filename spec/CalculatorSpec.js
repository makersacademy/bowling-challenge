'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  it ("game starts with 0 points", function(){
    expect(game.score()).toEqual(0);
  });

  describe("Scoring", function() {

    it ("20 gutter balls return 0 points", function(){
      for(var i = 0; i < 10; i ++){
        game.addFrame(0,0);
      }
      expect(game.score()).toEqual(0);
    });

    it ("calculates score correctly without strikes or spares", function(){
      for(var i = 0; i < 5; i ++){
        game.addFrame(1,6);
        game.addFrame(4,3);
      }
      expect(game.score()).toEqual(70);
    });

    it ("calculates score correctly with spares", function(){
      for(var i = 0; i < 5; i ++){
        game.addFrame(4,6);
        game.addFrame(4,4);
      }
      expect(game.score()).toEqual(110);
    });

    it ("calculates score correctly with strikes", function(){
      for(var i = 0; i < 5; i ++){
        game.addFrame(10,0);
      }
      for(var i = 0; i < 4; i ++){
        game.addFrame(5,5);
      }
      game.addFrame(5,5,5);
      expect(game.score()).toEqual(210);
    });

    describe ("Tenth frame", function(){
      it ("calculates score correctly with spares", function(){
      for(var i = 0; i < 9; i ++){
        game.addFrame(4,4);
      }
      game.addFrame(4,6,4);
      expect(game.score()).toEqual(86);
      });
    });
    describe ("Error handling", function(){
      it ("More than 10 frames returns an error", function(){
        for(var i = 0; i < 10; i ++){
          game.addFrame(0,0);
        }
        expect(function() {game.addFrame(0,0)}).toThrowError(TypeError, "Can't add over ten frames");
      });
    });

  });
});
