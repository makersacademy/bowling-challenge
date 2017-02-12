describe("Scorecalc", function(){
  var game;
  var player;
  var scorecalc;


  beforeEach(function(){
    player = new Player(game);
    scorecalc = new Scorecalc();
    game = new Game(scorecalc);
  });


it("should add the rolls to the scoreboard at the end of a frame", function(){
  spyOn(player, 'pinsKnocked').and.returnValue(3);
  player.throwBall();
  player.throwBall();
  expect(scorecalc.scoreboard["Frame1"]).toEqual([[3,3], 6]);
})
it("should take multiple frames", function(){
  spyOn(player, 'pinsKnocked').and.returnValue(3);
  player.throwBall();
  player.throwBall();
  player.throwBall();
  player.throwBall();
  expect(scorecalc.scoreboard["Frame1"]).toEqual([[3,3], 6]);
  expect(scorecalc.scoreboard["Frame2"]).toEqual([[3,3], 6]);
})

it("should update scoreboard in case of a strike", function(){
  spyOn(player, 'pinsKnocked').and.returnValue(10);
  player.throwBall();
  expect(scorecalc.scoreboard["Frame1"]).toEqual([[10,0], 10]);
})

describe("Strike Scoring", function(){
  it("updates the previous frame with the bonus from the last two rolls", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(10);
    player.throwBall();
    player.pinsKnocked = jasmine.createSpy().and.returnValue(3)
    player.throwBall();
    player.throwBall();
    expect(scorecalc.scoreboard["Frame1"]).toEqual([[10,0], 16]);
      })


    it("should update the total score with a bonus from the next two rolls", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(10);
      player.throwBall();
      player.pinsKnocked = jasmine.createSpy().and.returnValue(3)
      player.throwBall();
      player.throwBall();
      expect(scorecalc._totalScore).toEqual(22);
    })
  })

  describe("Final score calculations", function(){
    it("Should be a gutter game in the case of 0 score after frame 10", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(0);
      game._frame = 10;
      player.throwBall();
      player.throwBall();
      expect(scorecalc.gutterGame()).toEqual(true);
    })

    it("Should be not be a perfect game if one roll is not a strike", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(10);
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.pinsKnocked = jasmine.createSpy().and.returnValue(3)
      player.throwBall();
      player.throwBall();
      expect(scorecalc.perfectGame()).toEqual(false);
    })

    it("Should be not be a perfect game if the strikes are not consecutive", function(){
      spyOn(player, 'pinsKnocked').and.returnValue(10);
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.throwBall();
      player.pinsKnocked = jasmine.createSpy().and.returnValue(0)
      player.throwBall();
      player.pinsKnocked = jasmine.createSpy().and.returnValue(10)
      player.throwBall();
      expect(scorecalc.perfectGame()).toEqual(false);
    })

  })


})
