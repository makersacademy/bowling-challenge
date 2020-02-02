"use strict"

var GameController = function(gameModel, gameView) {

  var selection

  // Constructor
  this.gameModel = gameModel
  this.gameView = gameView

  this.startGame = function() {
    self = this
    $(document).ready(function(){
      $("#start-game").click(function(){
        self.gameModel.startGame()
        self.gameView.startGame()
        self.gameView.addButtons(self.gameModel.numButtons())
      })

      $(".input-button-default").click(function(){
        selection = parseInt($(this).attr('value'), 10)
        self.gameView.addRoll(self.gameModel.addRoll(selection))
        self.gameView.updateScores(self.gameModel.updateScores(selection))
        if (self.gameModel.isGameComplete == true ) {
          self.gameView.gameComplete() //show end screens and display play again button
        }
        else {
          self.gameView.addButtons(self.gameModel.numButtons(selection))
        }
      })
    })
  }

  // Upon construction
  this.startGame()
}
