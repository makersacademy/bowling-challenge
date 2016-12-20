describe("Bowling Game", function() {
  var game;
  beforeEach(function() {
    game = new Game();
  })

  describe("a new game", function() {

    it("should be able to display the current score", function() {
      expect(game.getCurrentScore()).toBeDefined();
    })

    it("should be able to display know the current frame", function() {
      expect(game.getCurrentFrame()).toBeDefined()
    })
  })

  describe("restarting the game", function() {

    beforeEach(function() {
      for(count=0;count<5;count++) {
        game.playBall()
      }
    })

    it("returns the current frame reset frames", function() {
      game.startAgain();
      expect(game.getCurrentFrame()).toEqual(1)
    })

  })

  it("Resets the pins when two rolls have been made", function() {
    for (count=0; count<2; count++) {
      game.playBall();
    }
    expect(game.rolls).toEqual(0)
  })

  it("game is not over until the end of the final frame", function() {
    game.playBall()
    expect(game.gameOver).toBeFalsy()
  })

  describe("bonus for spare", function() {

    beforeEach(function() {
      spyOn(game.pins, 'firstRoll').and.returnValue(7)
      spyOn(game.pins, 'secondRoll').and.returnValue(3)
      game.playBall()
      game.playBall()
    })

    it("awards bonus of next ball after a spare", function() {
      game.pins.firstRoll.and.returnValue(4)
      game.pins.secondRoll.and.returnValue(5)
      game.playBall()
      game.playBall()
      expect(game.getCurrentScore()).toEqual(23)
    })

    it("for two spares in a row", function() {
      game.pins.firstRoll.and.returnValue(4)
      game.pins.secondRoll.and.returnValue(6)
      game.playBall()
      game.playBall()
      game.pins.firstRoll.and.returnValue(4)
      game.pins.secondRoll.and.returnValue(5)
      game.playBall()
      game.playBall()
      expect(game.getCurrentScore()).toEqual(37)
    })
  })

  describe("bonus for strike", function() {

    beforeEach(function() {
      spyOn(game.pins, 'firstRoll').and.returnValue(10)
    })

    it("awards bonus of next two balls", function() {
      game.playBall()
      game.pins.firstRoll.and.returnValue(4)
      spyOn(game.pins, 'secondRoll').and.returnValue(3)
      game.playBall()
      game.playBall()
      expect(game.getCurrentScore()).toEqual(24)
    })

    it("for two strikes in a row", function() {
      game.playBall()
      game.pins.firstRoll.and.returnValue(10)
      game.playBall()
      game.pins.firstRoll.and.returnValue(4)
      spyOn(game.pins, 'secondRoll').and.returnValue(3)
      game.playBall()
      game.playBall()
      expect(game.getCurrentScore()).toEqual(48)


    })

  })

  describe("a perfect game", function() {

    beforeEach(function() {
      spyOn(game.pins, 'firstRoll').and.returnValue(10);
    })
    xit("ten strikes in a row gains 300 points", function() {
      for(count=0;count<9;count++) {
        game.playBall();
      }

      expect(game.getCurrentScore()).toEqual(300)
    })
  })

  describe("ending the game", function() {

    beforeEach(function() {
      spyOn(game.pins, "firstRoll").and.returnValue(7)
      spyOn(game.pins,"secondRoll").and.returnValue(2)
      for(count = 0; count < 20; count++) {
        game.playBall()
      }
    })

    it("finishes at the end of the final frame", function() {
      expect(game.gameOver).toBeTruthy()
    })

    it("trying to play throws an error", function() {
      expect(function() {game.playBall()}).toThrow(new Error("Maximum number of frames reached!"))
    })
  })
})
