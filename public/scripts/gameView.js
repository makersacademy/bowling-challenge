"use strict"

var GameView = function() {
  this.startGame = function() {
    $(".start-game").css("display", "none")
    $(".input-buttons").css("display", "inline")
    for (var i = 1; i < 11; i++) {
      $(`#roll1box${i}`).text("")
      $(`#roll2box${i}`).text("")
      $(`#totalbox${i}`).text("")
    }
    $(`#roll3box10`).text("")
    $(`#totalboxtotal`).text("")
  }

  this.addRoll = function(scoreObj) {
    console.log(scoreObj)
    $(`#roll${scoreObj['roll']}box${scoreObj['frame']}`).text(scoreObj['score'])
  }

  this.updateScores = function(totalsObj) {
    totalsObj.forEach(function(total) {
      $(`#totalbox${total['frame']}`).text(total['total'])
      $(`#totalboxtotal`).text(total['total'])
    })
  }

  this.addButtons = function(num) {
    for (var i = 0; i < (num + 1); i++) {
      $(`#button${i}`).css("display", "inline")
    }
    for (var i = (num + 1); i < 11; i++) {
      $(`#button${i}`).css("display", "none")
    }
  }

  this.gameComplete = function() {
    $(".start-game").text("Play Again?")
    $(".start-game").css("display", "inline")
    $(".input-button-default").css("display", "none")
  }
}
