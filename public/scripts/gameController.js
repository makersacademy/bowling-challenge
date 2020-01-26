"use strict"

//to do, update score view with value X or / or - or number instead of just number
// add reset game function or export game logic to GameModel and have simple controller to update functions and create new games when they become complete
// requires a real refactor and tests

var GameController = function(FrameModel, GameView) {

  var self,
      selection,
      score;

  // Constructor
  this.framesConstructor = FrameModel
  this.gameView = new GameView

  this.startGame = function() {
    self = this
    $(document).ready(function(){
      $("#start-game").click(function(){
        self.resetGame()
        self.newFrame()
        self.gameView.startGame()
        self.createInputButtons()
      })

      $(".input-button-default").click(function(){
        selection = parseInt($(this).attr('value'), 10)
        self.updateScore(selection)
        if (self.isGameComplete == true ) {
          self.gameView.gameComplete() //show end screens and display play again button
        }
        else {
          self.createInputButtons(selection)
        }
      })

    })
  }

  this.resetGame = function() {
    this.framesArray = []
    this.frame = 0
    this.roll = 1
    this.total = 0
    this.isGameComplete = false
  }

  this.newFrame = function() {
    this.frame += 1
    this.roll = 1
    this.framesArray.push(new this.framesConstructor(this.frame))
  }

  this.createInputButtons = function(selection = 10) {
    if (this.roll == 2) {
      selection = ( selection == 10 ? (10) : (10 - selection) )
    }
    else {
      selection = 10
    }
    this.gameView.addButtons(selection)
  }

  this.updateScore = function(selection) {
    // update scoreboard and previous frames which are listening
    this.gameView.updateScore(selection, this.frame, this.roll)
    this.updateFrames(selection)

    // provide functionality for final frame
    if (this.frame == 10) {
      if (this.roll == 1) {                                  // roll is 1
        this.finalRoll1 = selection
        this.roll = 2
      }
      else if (this.roll == 2) {                               // roll is 2
        if (this.finalRoll1 == 10 || (this.finaFirstRoll + selection) == 10) {
          this.roll = 3
        }
        else {
          this.isGameComplete = true
          this.gameView.updateScore("-", this.frame, 3)
        }
      }
      else {                                                   // roll is 3
        this.isGameComplete = true
      }
    }
    else {
      if (this.roll == 2 || selection == 10) {
        this.newFrame()
      }
      else {
        this.roll = 2
      }
    }
  }

  this.updateFrames = function(selection) {
    this.framesArray = this.framesArray.filter(frame => this.evalFrame(frame, selection))
  }

  this.evalFrame = function(frame, selection) {
    score = frame.addRoll(selection)
    if (score) {
      this.total += score[0]
      this.gameView.updateFrame(this.total, score[1])
    }
    else {
      // don't delete frame
      return true
    }
  }

  // Upon construction
  this.startGame()
}
