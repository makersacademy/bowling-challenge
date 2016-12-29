'use strict'

describe("Game", function(){
  var game
  var scoreboard

  beforeEach(function(){
    game = new Game()
    scoreboard = jasmine.createSpy("Scoreboard")
  })

  it("should initialize with a fram count of zero", function(){
    expect(game.frameCount).toEqual(0)
  })

  it("should initialize with a firstScore that equal 0", function(){
    expect(game.firstScore).toEqual(0)
  })

  it("should initialize with a secondScore thats equals 0", function(){
    expect(game.secondScore).toEqual(0)
  })

  it("should initialize with a false rack of pins", function(){
    expect(game.rackedPins).toBe(false)
  })

  it("should initialize with a false pin sweepComplete", function(){
    expect(game.sweepComplete).toBe(false)
  })

  it("should initialize with a bonus count of 0", function(){
    expect(game.bonusCount).toEqual(0)
  })

  it("should initialize with a bonusRoll equal to false", function(){
    expect(game.bonusRollStatus).toBe(false)
  })

  it("should initialize with a new Scoreboard", function() {
    expect(game.scoreboard).toEqual(new Scoreboard())
  })

  it("should return the left over pins", function(){
    game.frameCount = 4
    game.increaseFrameCount()
    spyOn(game, 'firstRoll').and.returnValue(2)
    game._pinSweep(game.firstRoll())
    expect(game.setUpPins).toEqual([0,1,2,3,4,5,6,7,8])
  })

  describe("start bowling", function() {

    beforeEach(function(){
      game.increaseFrameCount()
    })

    it("should increase frame count each time the pins are racked up", function(){
      expect(game.frameCount).toEqual(1)
    })

    it("should re-rack the pins between each round if frame count is less than ten", function(){
      expect(game.setUpPins).toContain(0,1,2,3,4,5,6,7,8,9,10)
    })

    it("should re-rack the pins and return rackedpins to be true between each round if frame count is less than ten", function(){
      game.frameCount = 1
      expect(game.rackedPins).toBe(true)
    })

    it("should re-rack with all the pins when frame count is 10 and a strike is scored on the first roll", function(){
      game.frameCount = 9
      spyOn(game, 'firstRoll').and.returnValue(10)
      expect(game.setUpPins).toEqual([0,1,2,3,4,5,6,7,8,9,10])
    })

    it("should call return amount of pins knocked down in first throw", function(){
      spyOn(game, 'firstRoll').and.returnValue(4)
      expect(game.scoreboard.scoreFirstRoll(game.firstRoll())).toEqual(4)
    })

    it("should return sweep complete as true", function(){
      game.firstRoll()
      expect(game.sweepComplete).toBe(true)
    })

    it("should return the true when remaining pins are returned", function(){
      game.firstRoll()
      expect(game.sweepComplete).toBe(true)
    });

    it("should return amount of pins knocked down in second throw", function(){
      game.firstRoll()
      spyOn(game, 'secondRoll').and.returnValue(3)
      expect(game.scoreboard.scoreSecondRoll(game.secondRoll())).toEqual(3)
    })

  })

  describe("bonus points", function(){

    beforeEach(function(){
      game.frameCount = 10
    })

    it("should rack up for one more roll if frame count is 10 and a spare is scored", function(){
      game.firstScore = 5
      game.secondScore = 5
      game.increaseFrameCount()
      expect(game.setUpPins).toEqual([0,1,2,3,4,5,6,7,8,9,10])
    })

    it("should rackup pins if frameCount is 10 and the first roll is a strike", function(){
      game.firstScore = 10
      game.increaseFrameCount()
      expect(game.setUpPins).toEqual([0,1,2,3,4,5,6,7,8,9,10])
    })

    it("should return result of second roll as zeros as only one extra roll is allowed", function(){
      game.firstScore = 5
      game.secondScore = 5
      game.increaseFrameCount()
      game.firstRoll()
      expect(game.secondRoll()).toEqual(0)
    })

  })

  describe("throw error when frame count is at its maximum", function(){

      beforeEach(function(){
        game.frameCount = 10
      })

      it("- frame count is more then ten", function(){
        expect(function(){ game.increaseFrameCount() }).toThrowError("Game Over! Please start a new game")
      })

      it("should throw an error when player tries to bowl more than two bonus balls", function(){
        game.firstScore = 10
        game.increaseFrameCount()
        game.firstScore = 10
        game.increaseFrameCount()
        game.firstScore = 10
        expect(function(){ game.increaseFrameCount() }).toThrowError("Game Over! Please start a new game")
      })

      it("should rack up for one more roll if frame count is 10 and a spare is scored", function(){
        game.firstScore = 5
        game.secondScore = 5
        game.increaseFrameCount()
        game.firstScore = 3
        expect(function(){ game.increaseFrameCount() }).toThrowError("Game Over! Please start a new game")
      })

  })

    describe("throw error when pins are not racked", function(){

      it("should throw an error when pins are not racked and player tries to bowl", function(){
        expect(function(){ game.firstRoll() }).toThrowError("Cannot Roll, Pins are not yet racked!")
      })

      it("should throw an error when pins are not sweeped and player tries to bowl", function(){
        expect(function(){ game.secondRoll() }).toThrowError("Cannot Roll, Pins are not yet racked!")
      })

    })

})
