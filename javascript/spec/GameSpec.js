describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it("should have an empty frames array when created", function(){
    expect(game.getFrames()).toEqual([]);
  })
  it("should have a score of 0 when created", function(){
    expect(game.getTotalScore()).toEqual(0);
  })

  describe("addFrame", function(){
    it("should add a frame to the frames array and add to the score", function(){
      frame.addRoll(5);
      frame.addRoll(4);
      game.addFrame(frame);
      expect(game.getFrames().length).toEqual(1)
      expect(game.getFrames()).toContain(frame)
      expect(game.getTotalScore()).toEqual(9)
    });
    it("should check for bonuses if game has already been started", function(){
      let bonusesSpy = spyOn(Game.prototype, "bonuses")
      let game = new Game
      game.addFrame(frame);
      game.addFrame(frame);
      expect(bonusesSpy).toHaveBeenCalled();
    });
    it("should check for second strike bonus if at least 2 frames into game", function(){
      let ssBonusSpy = spyOn(Game.prototype, "secondStrikeBonus")
      let game = new Game
      for(i = 0; i < 3; i++){
        game.addFrame(frame);
      };
      expect(ssBonusSpy).toHaveBeenCalled();
    });
  });

  describe("secondStrikeBonus", function(){
    it("calls addScoreOfNextRoll if last two rolls have been strikes", function(){
      let addScoreSpy = spyOn(Game.prototype, "addScoreOfNextRoll")
      spyOn(frame, "isStrike").and.returnValue(true);
      for(i = 0; i < 3; i++){
        game.addFrame(frame);
      };
      expect(addScoreSpy).toHaveBeenCalled();
    })
  })

  describe("finalFrame", function(){
    it("returns true if game already has 9 frames", function(){
      for(i = 0; i < 9; i++){
        game.addFrame(frame);
      };
      expect(game.finalFrame()).toBe(true);
    });
  })

  describe("calculateStrikeBonus", function(){
    it("gets score of next frame, adds it to the strike and amends total", function(){
      game.addFrame(frame);
      nextFrame = new Frame;
      spyOn(nextFrame, "getScore").and.returnValue(8);
      game.calculateStrikeBonus(frame, nextFrame);
      expect(game.getTotalScore()).toEqual(8);
      expect(frame.getScore()).toEqual(8);
    })
    it("adds only score of first two rolls if bonus frame is final frame and has 3 rolls", function(){
      game.addFrame(frame);
      spyOn(game, "finalFrame").and.returnValue(true);
      nextFrame = new Frame;
      for(i = 0; i < 3; i ++){
        nextFrame.addRoll(3, game)
      }
      game.calculateStrikeBonus(frame, nextFrame);
      expect(frame.getScore()).toEqual(6);
    });
  });

  describe("addScoreOfNextRoll", function(){
    it("adds value of only first roll of one frame to another", function(){
      nextFrame = new Frame;
      nextFrame.addRoll(5, game);
      nextFrame.addRoll(3, game);
      game.addScoreOfNextRoll(frame, nextFrame);
      expect(frame.getScore()).toEqual(5);
      expect(game.getTotalScore()).toEqual(5);
    });
  });

  describe("bonuses", function(){
    it("calls strike bonus method if last frame was a strike", function(){
      let calcStrikespy = spyOn(Game.prototype, "calculateStrikeBonus")
      spyOn(frame, "isStrike").and.returnValue(true);
      game.addFrame(frame);
      game.bonuses(frame)
      expect(calcStrikespy).toHaveBeenCalled();
    });
    it("calls addScoreOfNextRoll bonus method if last frame was a spare", function(){
      let addRollSpy = spyOn(Game.prototype, "addScoreOfNextRoll")
      spyOn(frame, "isSpare").and.returnValue(true);
      game.addFrame(frame);
      game.bonuses(frame)
      expect(addRollSpy).toHaveBeenCalled();
    });
  });

  describe("finalMessage", function(){
    it("should return special message for gutter game", function(){
      spyOn(game, "getTotalScore").and.returnValue(0);
      expect(game.finalMessage()).toEqual("Your game is finished! You scored 0. Oh dear, that's a gutter game :(")
    });
    it("should return special message for perfect game", function(){
      spyOn(game, "getTotalScore").and.returnValue(300);
      expect(game.finalMessage()).toEqual("Your game is finished! You scored 300. You bowled the PERFECT GAME!")
    });
    it("should return standard message for other games", function(){
      spyOn(game, "getTotalScore").and.returnValue(160);
      expect(game.finalMessage()).toEqual("Your game is finished! You scored 160.")
    });
  });



});
