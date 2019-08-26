$( document ).ready(function() {
  var bowling;
  var bowling2;
  bowling = new Bowling()
  bowling2 = new Bowling()

  // game1

  $("#submit").click(function() {
    var score = parseInt($("#throw").val());
    var frame = bowling.getCurrentFrame()
    bowling.throw(score);
    if(bowling.isFirstThrow() == true) {
      addRow(frame)
    }
    if(bowling.gameOver == true) {
      addRow(frame)
      gameOverEvent(bowling)
    }
  })

  var addRow = function(frame){
    frameEvents(bowling, frame)
    $("#bowling-frames").append("<tr><td>" + frame + "</td><td>" + bowling.scores[frame][0] +  "</td><td>" + bowling.scores[frame][1] + "</td><td>" + bowling.frameDisplay(frame) + "</td><td>" + bowling.totalScore() + "</td></tr>")
  }

  // game2

  $("#submit2").click(function() {
    var score = parseInt($("#throw-two").val());
    var frame = bowling2.getCurrentFrame()
    bowling2.throw(score);
    if(bowling2.isFirstThrow() == true) {
      addRow2(frame)
    }
    if(bowling2.gameOver == true) {
      addRow2(frame)
      gameOverEvent(bowling2)
    }
  })

  var addRow2 = function(frame){
    frameEvents(bowling2, frame)
    $("#bowling-frames2").append("<tr><td>" + frame + "</td><td>" + bowling2.scores[frame][0] +  "</td><td>" + bowling2.scores[frame][1] + "</td><td>" + bowling2.frameDisplay(frame) + "</td><td>" + bowling2.totalScore() + "</td></tr>")
  }

  // shared events

  var frameEvents = function(game,frame) {
    if(game.standardScore(frame) > 10) {
      changeGif("cheater")
      changeMessage("Smokey, this is not Vietnam, this is bowling. There are rules.")
    } else if(game.isStrike(frame)) {
      changeGif("strike")
      changeMessage("STRIKE: I'm throwing rocks tonight. Mark it, Dude.")
    } else if(game.isSpare(frame)) {
      changeGif("spare")
      changeMessage("SPARE: Mark it, Dude.")
    } else if(game.standardScore(frame) == 0) {
      changeGif("zero")
      changeMessage("Mark it zero. Next frame.")
    }
  }

  var gameOverEvent = function(game) {
    if(game.totalScore() == 300) {
      changeGif("perfect-game")
      changeMessage("PERFECT GAME: He was a bowler")
    } else if(game.totalScore() == 0) {
      changeGif("gutter-game")
      changeMessage("GUTTER GAME: Forget it Donny, you're out of your element!")
    } else {
      changeGif("game-over")
      changeMessage("GAME OVER: you scored " + game.totalScore() + ", The Dude Abides")      
    }
  }

  var changeGif = function(gif) {
    $("#gif").attr('class', gif)
  }

  var changeMessage = function(message) {
    $("#game-message").text(message)
  }
});