describe("Game", function(){
  var game;
  var player;
  var scoreboard;

  beforeEach(function(){
    game = new Game();
    player = new Player(game);
    scoreboard = new Scoreboard();
  });

  it("should track the framescore", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(3);
    player.throwBall();
    expect(game._frameScore).toEqual(3);
  });

  it("should update the roll tracker on each throw", function(){
    player.throwBall();
    expect(game._rollTracker).toEqual(1);
  });

  it("should update the frame number after 2 normal throws", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(3);
    player.throwBall();
    player.throwBall();
    expect(game._frame).toEqual(2);
  });

  it("should update the frame to frame 3 after 4 normal throws", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(3);
    player.throwBall();
    player.throwBall();
    player.throwBall();
    player.throwBall();
    expect(game._frame).toEqual(3);
  });

  it("should reset the roll tracker when frame changes", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(3);
    player.throwBall();
    player.throwBall();
    expect(game._rollTracker).toEqual(2);
  });

  it("should update the total score at the end of each frame", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(3);
    player.throwBall();
    player.throwBall();
    expect(game._totalScore).toEqual(6);
  });

  it("should NOT update the total score until the frame is over", function(){
    player.throwBall();
    expect(game._totalScore).toEqual(0);
  });

  it("should reset the frame score after each frame", function(){
    player.throwBall();
    player.throwBall();
    expect(game._frameScore).toEqual(0);
  });

  describe("scoreboard", function(){
    it("should add each roll to an array", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(3);
      player.throwBall();
      expect(game.frameRolls).toEqual([3]);
    })

    it("should add the rolls to the scoreboard at the end of a frame", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(3);
      player.throwBall();
      player.throwBall();
      expect(game.scoreboard.Frame1).toEqual([[3,3], 6]);
    })
    it("should take multiple frames", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(3);
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.throwBall();
      expect(game.scoreboard.Frame1).toEqual([[3,3], 6]);
      expect(game.scoreboard.Frame2).toEqual([[3,3], 6]);
    })

    it("should update scoreboard in case of a strike", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(10);
      player.throwBall();
      expect(game.scoreboard.Frame1).toEqual([[10,0], 10]);
    })

    it("should allow for one bonus roll in the case of a spare", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(5);
      player.throwBall();
      player.throwBall();
      expect(game.bonusCounter).toEqual(1);
    })
  })

  it("should update a spare correctly after a strike", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(10);
    player.throwBall();
    player.pinsKnocked = jasmine.createSpy().and.returnValue(5);
    player.throwBall();
    player.throwBall();
    expect(game.bonusCounter).toEqual(1);
  })

  describe("Strike rules", function(){
    it("should end the frame immediately in the case of a strike", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(10);
      player.throwBall();
      expect(game._frame).toEqual(2);
    })

    it("should update the total score with a bonus from the next two rolls", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(10);
      player.throwBall();

      player.pinsKnocked = jasmine.createSpy().and.returnValue(3)
      player.throwBall();
      player.throwBall();
      expect(game._totalScore).toEqual(22);
    })
  })

  it("updates the previous frame with the bonus from the last two rolls", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(10);
    player.throwBall();

    player.pinsKnocked = jasmine.createSpy().and.returnValue(3)
    player.throwBall();
    player.throwBall();
    expect(game.scoreboard.Frame1).toEqual([[10,0], 16]);

})

})
