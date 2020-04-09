"use strict"

var GameController = function(gameModel, gameView) {
  this.gameModel = gameModel
  this.gameView = gameView

  this.startGame = function() {
    self = this
    $(".start-game").click(function() {
      self.gameModel.startGame()
      self.gameView.startGame()
      self.gameView.addButtons(self.gameModel.numButtons())
    })

    $(".input-button-default").click(function() {
      var selection = parseInt($(this).attr('value'))
      self.gameView.addRoll(self.gameModel.addRoll(selection))
      self.gameView.updateScores(self.gameModel.updateScores(selection))
      if (self.gameModel.isGameComplete == true) {
        self.gameView.gameComplete() // show end screens and display play again button
      }
      else {
        self.gameModel.lastRoll = selection
        self.gameView.addButtons(self.gameModel.numButtons(selection))
      }
    })
  }
  this.startGame()
}
