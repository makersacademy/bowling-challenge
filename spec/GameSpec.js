describe("Game", function(){
  var game;
  var player;
  var scorecalc;


  beforeEach(function(){
    player = new Player(game);
    scorecalc = new Scorecalc();
    game = new Game(scorecalc);
  });



  it("should end the game after frame 10", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(3);
    game._frame = 10;
    player.throwBall();
    player.throwBall();
    expect(game.isEnd()).toEqual(true);
  })

  it("should announce the game end after frame 10", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(3);
    game._frame = 10;
    player.throwBall();
    player.throwBall();
    expect(game.updateFrame()).toEqual("Game Over");
  })

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


  describe("scoreboard", function(){
    it("should add each roll to an array", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(3);
      player.throwBall();
      expect(game.frameRolls).toEqual([3]);
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

  })



  describe("Frame 10", function(){
    it("should allow the player to throw up to three balls in the case of a strike", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(10);
      game._frame = 10;
      player.throwBall();
      expect(game.max_rolls).toEqual(3);
      expect(game._rollTracker).toEqual(2);
    })

    it("should allow one extra roll in case of a spare", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(5);
      game._frame = 10;
      player.throwBall();
      player.throwBall();
      expect(game.max_rolls).toEqual(3);
      expect(game._rollTracker).toEqual(1);
    })
  })
})
