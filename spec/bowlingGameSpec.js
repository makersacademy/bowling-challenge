describe("Game", function() {
  beforeEach(function() {
    game = new Game();
  });

  describe("Bowls one on the first roll", function() {
    beforeEach(function() {
      game.nextBowlAndUpdate(1);
    });
    it("should create a new frame on the first bowl of the frame", function() {
      expect(game._frames[0]._frameScore).toEqual(1);
    });
    it("After one roll, current roll should be 2", function() {
      expect(game._currentRoll).toEqual(2);
    });
    it("Should raise an error if the pinsdowned exceeds 10", function() {
      expect( function(){
        game.nextBowl(10);
      }).toThrowError("Don't cheat!!!");
    });

    describe("Bowls two on the second roll", function() {
      beforeEach(function() {
        game.nextBowlAndUpdate(2);
      });
      it("should add the framescore for each frame", function() {
        expect(game._frames[0]._frameScore).toEqual(3);
      });
      it("should add the total score after each frame", function() {
        expect(game._score).toEqual(3);
      });
      it("should proceed to the next frame after 2 balls of a none strike or spare frame", function() {
        expect(game._currentFrame).toEqual(2);
      });
      it("After two rolls, current roll should be 1", function() {
        expect(game._currentRoll).toEqual(1);
      });
    });

    describe("Bowls a spare on the second roll", function() {
      beforeEach(function() {
        game.nextBowlAndUpdate(9);
      });

        describe("Bowls a three on the third roll", function(){
          beforeEach(function() {
            game.nextBowlAndUpdate(3);
          });
          it("should give a bonus score on the ball after if a spare is scored", function() {
            expect(game._frames[0]._frameScore).toEqual(13);
          });
          it("should add a bonus to the total score for the spare the roll after", function() {
            expect(game._score).toEqual(16);
          });

          describe("Bowls a five on the fourth roll", function() {
            beforeEach(function() {
              game.nextBowlAndUpdate(5);
            });
            it("should not give a bonus two balls after if a spare is scored", function() {
              expect(game._frames[0]._frameScore).toEqual(13);
            });
          });
        });
    });
  });

  describe("Bowls a strike on the first ball", function() {
    beforeEach(function() {
      game.nextBowlAndUpdate(10);
    });
    it("should proceed to the next frame if a strike is scored", function(){
      expect(game._currentFrame).toEqual(2);
    });

    describe("Bowls a none strike or spare frame (1 & 3)", function() {
      beforeEach(function() {
        game.nextBowlAndUpdate(1);
        game.nextBowlAndUpdate(3);
      });
      it("should give a bonus score on the next two rolls if a strike is scored", function() {
        expect(game._frames[0]._frameScore).toEqual(14);
      });
      it("should add a bonus to the total score for the strike the next two rolls", function() {
        expect(game._score).toEqual(18);
      });
    });

    describe("Bowls a strike on the second roll and a one the roll after", function() {
      beforeEach(function() {
        game.nextBowlAndUpdate(10);
        game.nextBowlAndUpdate(1);
      });
      it("should give a bonus score on the next two balls if a strike is scored even with consecutve strikes", function() {
        expect(game._frames[0]._frameScore).toEqual(21);
      });
      it("should add a bonus to the total score for the next two rolls, even with consecutive strikes", function() {
        expect(game._score).toEqual(33);
      });
    });
  });

  describe("Bowls 9 strikes on first 9 rolls", function() {
    beforeEach(function() {
      for (i=0; i < 9; i++) {
       game.nextBowlAndUpdate(10);
      }
    });

    describe("Bowls spare in the 10th frame(7 & 3)", function() {
      beforeEach(function() {
        game.nextBowlAndUpdate(7);
        game.nextBowlAndUpdate(3);
      });
      it("should give an extra roll on the 10th Frame if a spare is scored", function() {
        expect(game._currentFrame).toEqual(10);
        game.nextBowlAndUpdate(1);
        expect(game._frames[9]._rolls[2]).toEqual(1);
        expect(game._frames[9]._frameScore).toEqual(11);
      });
    });
  });

  describe("Bowls 10 strikes on first 10 rolls", function() {
    beforeEach(function() {
      for (i=0; i < 10; i++) {
        game.nextBowl(10);
        game.updateCurrentFrame();
      }
    });
    it("should not raise an error on the following roll, if a strike is scored on the first roll of the tenth frame", function(){
      expect( function(){
        game.nextBowl(5);
      }).not.toThrowError("Don't cheat!!!");
    });
    it("should raise an error if the second and third ball of the tenth frame exceed 10", function() {
      game.nextBowlAndUpdate(8);
      expect( function(){
        game.nextBowlAndUpdate(5);
      }).toThrowError("Don't cheat!!!");
    });
  });

  describe("Bowls 11 strikes on first 11 rolls", function() {
    beforeEach(function() {
      for (i=0; i < 11; i++) {
        game.nextBowl(10);
        game.updateCurrentFrame();
      }
    });
    it("Should be roll 3 if a spare or strike is scored in the 10th frame", function() {
      expect(game._currentRoll).toEqual(3);
    });
  });

  describe("Bowls 12 strikes (Perfect Game)", function() {
    beforeEach(function() {
      for (i=0; i < 12; i++) {
       game.nextBowlAndUpdate(10);
      }
    });
    it("should give an extra bowl on the 10th Frame if a strike is scored", function() {
      expect(game._frames[9]._frameScore).toEqual(30);
    });
    it("should give bonuses when there is a strike in the 9th frame and 10th frame", function() {
      expect(game._score).toEqual(300);
    });
    it("should not add the bonus for the 10th frame third roll to the strike bonus from the 9th frame", function() {
      expect(game._frames[8]._frameScore).toEqual(30);
    });
    it("should raise an error if the number of rolls exceed 3 on the tenth frame", function() {
      expect( function(){
        game.nextBowlAndUpdate(5);
      }).toThrowError("Don't cheat!!!");
    });
    it("gameOver should return true after all rolls", function() {
      expect(game.gameOver()).toEqual(true);
    });
    it("should return perfectGame true after 12 strikes", function() {
      expect(game.perfectGame()).toEqual(true);
    });
  });

  describe("Bowls 20 gutter balls", function() {
    beforeEach(function() {
      for (i=0; i < 20; i++) {
        game.nextBowlAndUpdate(0);
      }
    });
    it("gameOver should equal true after 20 gutter balls", function() {
      expect(game.gameOver()).toEqual(true);
    });
    it("should return gutterBall true after 20 0 scores", function() {
      expect(game.gutterGame()).toEqual(true);
    });
  });
});

//-- HELPERS --//

Game.prototype.nextBowlAndUpdate = function(pinsdowned){
  this.nextBowl(pinsdowned);
  this.updateCurrentFrame();
};
