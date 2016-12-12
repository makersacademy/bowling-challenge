'use strict';

describe("bowlingGame", function() {
  var game;

  beforeEach(function(){
    game = new BowlingGame;
  });

  describe("Initialize", function(){
    it("Should initialize with score set to zero", function(){
      expect(game.score).toEqual(0)
    });

    it("should intialize with strike bonus throws set to zero", function(){
      expect(game.strikeBonusThrows).toEqual(0)
    });

    it("should intialize with spare bonus throws set to zero", function(){
      expect(game.spareBonusThrows).toEqual(0)
    });
  });



  describe("#roll", function(){
    it("Should update score when player rolls less than a strike or spare", function(){
      game.roll(2,4)
      expect(game.score).toEqual(6)
    });

    it("Should update score when player rolls less than a strike or spare #2", function(){
      game.roll(2, 0)
      expect(game.score).toEqual(2)
    });
  });

  describe("Strike functionality", function(){
    it("Should double the score of the next two rolls", function(){
      game.roll(10)
      game.roll(2,3)
      expect(game.score).toEqual(20)
    });

    it("Should have double strike compounding functionality", function(){
      game.roll(10);
      game.roll(10);
      game.roll(5,0);
      expect(game.score).toEqual(45)
    });

    it("Should have double strike compounding functionality #2", function(){
      for (var i = 0; i < 5; i++) {
        game.roll(10);
      }
      expect(game.score).toEqual(120)
    });

    it("Should have double strike compounding functionality #3", function(){
      for (var i = 0; i < 10; i++) {
        game.roll(10);
      }
      expect(game.score).toEqual(270);
    });
  });

  describe("Perfect game", function(){
    it("Player should be able to score a perfect game by getting 13 strikes in a row", function(){
      for (var i = 0; i < 13; i++) {
        game.roll(10);
      }
      expect(game.score).toEqual(300);
    });
  });

  describe("Spare functionality",function(){
    it("Player should have his first roll after getting a spare doubled", function(){
      game.roll(4,6);
      game.roll(2,0);
      expect(game.score).toEqual(14);
    });
  });

  describe("Gutter game", function(){
    it("Player should have a zero score after getting zero 20 times", function(){
      for (var i = 0; i < 13; i++) {
        game.roll(0,0);
      }
      expect(game.score).toEqual(0)
    });
  });

  describe("Errors", function(){
    it("Should raise error if player tries to roll more than 23 times", function(){
    for (var i = 0; i < 13; i++) {
      game.roll(10);
    }
    expect(function(){game.roll(10);}).toThrowError("Maximum number of frames reached. Please start a new game")
    });
  });








});
