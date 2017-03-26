"use strict";

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("starts with a score of 0", function() {
    expect(game.totalScore).toEqual(0);
  });

  it("starts on frame 1", function() {
    expect(game.frame).toEqual(1)
  });

  describe("tracking frame", function() {
    it("moves to the next frame", function() {
      game.nextFrame();
      expect(game.frame).toEqual(2)
    });

    it("saves the frame object", function() {
      var frame = {};
      game.saveFrame(frame);
      expect(game.pointsLog).toEqual([frame])
    });

    it("ends the game after the 10th frame if no bonus", function() {
      game.frame = 10;
      expect(game._onFinalFrame()).toEqual(true);
    });

    it("gives the user one bonus roll if the 10th frame is a spare", function() {
      for(var i = 0; i < 18; i++) {
          game.addPoints(3)
        }
      game.addPoints(5)
      game.addPoints(5)
      game.addFinalBonusPoints(2)
      expect(game.totalScore).toEqual(66)
    });
  });

  describe("scoring", function() {
    it("adds the score from each frame to the running total", function() {
      var firstFrame = {totalScore: 10}
      game.saveFrame(firstFrame)
      game.sumPoints();
      expect(game.totalScore).toEqual(10)
    });

    it("adds the score for a complete game where no bonuses", function() {
      for(var i = 0; i < 20; i++) {
          game.addPoints(3)
        };
      expect(game.totalScore).toEqual(60)
    });

    
    describe("bonus points", function() {

      it("adds the points from the next two rolls if strike", function() {
        game.addPoints(10)
        game.addPoints(3)
        game.addPoints(3)
        expect(game.pointsLog[0].totalScore).toEqual(16)
      });

      it("adds the points from the following roll if spare", function() {
        game.addPoints(3)
        game.addPoints(7)
        game.addPoints(3)
        expect(game.pointsLog[0].totalScore).toEqual(10)
      });

      it("can calculate 2 strikes in a row", function() {
        game.addPoints(10)
        game.addPoints(10)
        game.addPoints(3)
        game.addPoints(3)
        expect(game.totalScore).toEqual(45)
      });

      it("can calculate 3 strikes in a row", function() {
        game.addPoints(10)
        game.addPoints(10)
        game.addPoints(10)
        game.addPoints(3)
        game.addPoints(3)
        expect(game.totalScore).toEqual(75)
      });

      it("can calculate 2 spares in a row", function() {
        game.addPoints(3)
        game.addPoints(7)
        game.addPoints(3)
        game.addPoints(7)
        game.addPoints(3)
        game.addPoints(3)
        expect(game.totalScore).toEqual(32)
      });

      it("adds the score for a complete game where 10th frame is spare", function() {
        for(var i = 0; i < 19; i++) {
            game.addPoints(3)
          }
        game.addPoints(7)
        game.addFinalBonusPoints(3)
        expect(game.totalScore).toEqual(67)
      });

      it("calculates the score for a perfect game", function() {
        for(var i = 0; i < 10; i++) {
          game.addPoints(10)
        }
        game.addFinalBonusPoints(10)
        game.addFinalBonusPoints(10)
        expect(game.totalScore).toEqual(300)
      })

    });
  });





});
