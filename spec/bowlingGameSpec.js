describe("Game", function() {
  beforeEach(function() {
    game = new Game();
  });

  describe("nextBowl", function() {
    it("should create a new frame on the first bowl of the frame", function() {
      game.nextBowl(1);
      game.updateCurrentFrame();
      expect(game._frames[0]._frameScore).toEqual(1);
    });

    it("should bowl a second ball and add the framescore for each frame", function() {
      game.nextBowl(1);
      game.updateCurrentFrame();
      game.nextBowl(2);
      game.updateCurrentFrame();
      expect(game._frames[0]._frameScore).toEqual(3);
    });
    it("should proceed to the next frame after 2 balls of a none special frame", function() {
      game.nextBowl(1);
      game.updateCurrentFrame();
      game.nextBowl(2);
      game.updateCurrentFrame();
      expect(game._currentFrame).toEqual(2);
    });
    it("should give a bonus score on the ball after if a spare is scored", function() {
      game.nextBowl(9);
      game.updateCurrentFrame();
      game.nextBowl(1);
      game.updateCurrentFrame();
      game.nextBowl(3);
      game.updateCurrentFrame();
      expect(game._frames[0]._frameScore).toEqual(13);
    });
    it("should not give a bonus two balls after if a spare is scored", function() {
      game.nextBowl(9);
      game.updateCurrentFrame();
      game.nextBowl(1);
      game.updateCurrentFrame();
      game.nextBowl(3);
      game.updateCurrentFrame();
      game.nextBowl(5);
      game.updateCurrentFrame();
      expect(game._frames[0]._frameScore).toEqual(13);
    });
    it("should proceed to the next frame if a strike is scored", function(){
      game.nextBowl(10);
      game.updateCurrentFrame();
      expect(game._currentFrame).toEqual(2);
    });
    it("should give a bonus score on the next two balls if a strike is scored", function() {
      game.nextBowl(10);
      game.updateCurrentFrame();
      game.nextBowl(1);
      game.updateCurrentFrame();
      game.nextBowl(3);
      game.updateCurrentFrame();
      expect(game._frames[0]._frameScore).toEqual(14);
    });
    it("should give a bonus score on the next two balls if a strike is scored even with consecutve strikes", function() {
      game.nextBowl(10);
      game.updateCurrentFrame();
      game.nextBowl(10);
      game.updateCurrentFrame();
      game.nextBowl(1);
      game.updateCurrentFrame();
      expect(game._frames[0]._frameScore).toEqual(21);
    });
    it("should give an extra bowl on the 10th Frame if a spare is scored", function() {
      for (i=0; i < 9; i++) {
       game.nextBowl(10);
       game.updateCurrentFrame();
      }
      game.nextBowl(7);
      game.updateCurrentFrame();
      game.nextBowl(3);
      game.updateCurrentFrame();
      expect(game._currentFrame).toEqual(10);
      game.nextBowl(1);
      game.updateCurrentFrame();
      expect(game._frames[9]._rolls[2]).toEqual(1);
      expect(game._frames[9]._frameScore).toEqual(11);
    });
    it("should give an extra bowl on the 10th Frame if a strike is scored", function() {
      for (i=0; i < 12; i++) {
       game.nextBowl(10);
       game.updateCurrentFrame();
      }
      expect(game._frames[9]._frameScore).toEqual(30);
    });
    it("should add the total score after each frame", function() {
      game.nextBowl(7);
      game.updateCurrentFrame();
      game.nextBowl(1);
      game.updateCurrentFrame();
      expect(game._score).toEqual(8);
    });
    it("should add a bonus to the total score for the spare the roll after", function() {
      game.nextBowl(7);
      game.updateCurrentFrame();
      game.nextBowl(3);
      game.updateCurrentFrame();
      game.nextBowl(4);
      game.updateCurrentFrame();
      expect(game._score).toEqual(18);
    });
    it("should add a bonus to the total score for the strike the next two rolls", function() {
      game.nextBowl(10);
      game.updateCurrentFrame();
      game.nextBowl(3);
      game.updateCurrentFrame();
      game.nextBowl(4);
      game.updateCurrentFrame();
      expect(game._score).toEqual(24);
    });
    it("should add a bonus to the total score for the next two rolls, even with consecutive strikes", function() {
      game.nextBowl(10);
      game.updateCurrentFrame();
      game.nextBowl(10);
      game.updateCurrentFrame();
      game.nextBowl(3);
      game.updateCurrentFrame();
      game.nextBowl(4);
      game.updateCurrentFrame();
      expect(game._score).toEqual(47);
    });
    it("should give a bonus when there is a strike in the 9th frame and 10th frame", function() {
      for (i=0; i < 12; i++) {
        game.nextBowl(10);
        game.updateCurrentFrame();
      }
      expect(game._score).toEqual(300);
    });
    it("After one roll, current roll should be 2", function() {
      game.nextBowl(1);
      game.updateCurrentFrame();
      expect(game._currentRoll).toEqual(2);
    });
    it("After two rolls, current roll should be 1", function() {
      game.nextBowl(1);
      game.updateCurrentFrame();
      game.nextBowl(2);
      game.updateCurrentFrame();
      expect(game._currentRoll).toEqual(1);
    });
    it("Should be roll 3 if a spare or strike is scored in the 10th frame", function() {
      for (i=0; i < 11; i++) {
        game.nextBowl(10);
        game.updateCurrentFrame();
      }
      expect(game._currentRoll).toEqual(3);
    });
    it("Should raise an error if the pinsdowned exceeds 10", function() {
      game.nextBowl(7);
      expect( function(){
        game.nextBowl(5);
      }).toThrowError("Don't cheat!!!");
    });
    it("should not raise an error on the following roll if a strike is scored on the first roll of the tenth frame", function(){
      for (i=0; i < 10; i++) {
        game.nextBowl(10);
        game.updateCurrentFrame();
      }
      expect( function(){
        game.nextBowl(5);
      }).not.toThrowError("Don't cheat!!!");
    });
    it("should raise an error if the third and second ball of the tenth frame exceed 10", function() {
      for (i=0; i < 10; i++) {
        game.nextBowl(10);
        game.updateCurrentFrame();
      }
      game.nextBowl(8);
      expect( function(){
        game.nextBowl(5);
      }).toThrowError("Don't cheat!!!");
    });
    it("should not add the bonus for the 10th frame third roll to the strike bonus from the 9th frame", function() {
      for (i=0; i < 12; i++) {
        game.nextBowl(10);
        game.updateCurrentFrame();
      }
      expect(game._frames[8]._frameScore).toEqual(30);
    });
    it("should raise an error if the number of rolls exceed 3 on the tenth frame", function() {
      for (i=0; i < 12; i++) {
        game.nextBowl(10);
        game.updateCurrentFrame();
      }
      expect( function(){
        game.nextBowl(5);
      }).toThrowError("Don't cheat!!!");
    });
    it("gameOver should return true after all the games rolls", function() {
      for (i=0; i < 12; i++) {
        game.nextBowl(10);
        game.updateCurrentFrame();
      }
      expect(game.gameOver()).toEqual(true);
    });
    it("gameOver should equal false after 20 gutter balls", function() {
      for (i=0; i < 20; i++) {
        game.nextBowl(0);
        game.updateCurrentFrame();
      }
      expect(game.gameOver()).toEqual(true);
    });
    it("should return gutterBall true after 20 0 scores", function() {
      for (i=0; i < 20; i++) {
        game.nextBowl(0);
        game.updateCurrentFrame();
      }
      expect(game.gutterGame()).toEqual(true);
    });
    it("should return perfectGame true after 12 strikes", function() {
      for (i=0; i < 12; i++) {
        game.nextBowl(10);
        game.updateCurrentFrame();
      }
      expect(game.perfectGame()).toEqual(true);
    });
    it("should return gameOver true after a non strike or spare tenth frame", function() {
      for (i=0; i < 20; i++) {
        game.nextBowl(1);
        game.updateCurrentFrame();
      }
      expect(game.gameOver()).toEqual(true);
    });
  });
});
