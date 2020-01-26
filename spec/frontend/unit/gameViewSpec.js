"use strict"

describe("Game Controller", function() {

  var gameView,
      showSpy;

  beforeEach(function() {
    gameView = new GameView()
  })

  describe("::new", function() {
    it("Should create new GameView instance", function() {
      expect(gameView instanceof GameView).toBe(true)
    })
  })

  describe("#startGame", function() {
    it("Should remove start game button from view", function() {

    })
    it("Should add option buttons to view", function() {

    })
    it("Should wipe the scoreboard", function() {

    })
  })

  describe("#updateFrame", function() {
    it("Should update frame with score", function() {

    })
    it("Should update overall total with score", function() {

    })
  })

  describe("#addButtons", function() {
    it("Should make required buttons visible", function() {

    })
  })

  describe("#updateScore", function() {
    it("Should update frame roll section with score", function() {

    })
  })


  describe("#gameComplete", function() {
    it("Should display play again button", function() {

    })
    it("Should remove score buttons from view", function() {

    })
  })




})
