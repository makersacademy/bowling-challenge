var GameView = function() {

  this.startGame = function() {
    $(document).ready(function(){
      $("#start-game").css("display", "none")
      $(".input-buttons").css("display", "inline")
      for (var i = 1; i < 11; i++) {
        $(`#roll1box${i}`).text("")
        $(`#roll2box${i}`).text("")
        $(`#totalbox${i}`).text("")
      }
      $(`#roll3box10`).text("")
      $(`#totalboxtotal`).text("")
    })
  }

  this.updateFrame = function(score, frame) {
    $(document).ready(function(){
      $(`#totalbox${frame}`).text(score)
      $(`#totalboxtotal`).text(score)
    })
  }

  this.addButtons = function(num) {
    $(document).ready(function(){
      for (var i = 0; i < (num + 1); i++) {
        $(`#button${i}`).css("display", "inline")
      }
      for (var i = (num + 1); i < 11; i++) {
        $(`#button${i}`).css("display", "none")
      }
    })
  }

  this.updateScore = function(score, frame, roll) {
    $(document).ready(function(){
      $(`#roll${roll}box${frame}`).text(score)
    })
  }

  this.gameComplete = function() {
    $(document).ready(function(){
      $("#start-game").text("Play Again?")
      $("#start-game").css("display", "inline")
      $(".input-buttons").css("display", "none")
    })
  }
}
