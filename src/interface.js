$(document).ready(function(){
  var game = new FrameLog()
  updateScores()

  $("#new-game").click(function(event){
    game =  new FrameLog()
    clearScorescard()
    getMessage()
  })

  function updateScores(rollNumber){
    $("#totalScore").text(game.calculateScore())
      for(var i = 0; i < game.frameCount(); i ++){
        $(`#f${i+1}`).text(game.frames[i].score())
      }
      updateRolls()
      getMessage(rollNumber)
      isGameComplete()
    }

    function updateRolls(){
      for(var i = 0; i < game.frameCount(); i ++){
        $(`#f${i+1}rolls`).text(game.frames[i].rolls.toString())
      }
    }

    function isGameComplete(){
      if (game.isFramelogComplete()){
        $('#complete').text("Frame Score Card Complete")
        $('#message').text("")
      } else {
        $('#complete').text("")
      }
    }

    function clearScorescard(){
      $("#totalScore").text(0)
      for(var i = 0; i < FRAME_LIMIT; i ++){
        $(`#f${i+1}`).text(0)
        $(`#f${i+1}rolls`).text('')
      };
      isGameComplete()
    }
    function getMessage(rollNumber){
      switch (rollNumber){
        case 0:
          $('#message').text("Never a good time to clean the gutters.");
          break;
        case 1:
          $('#message').text("Knocking them down, one pin at a time");
          break;
        case 2:
          $('#message').text("Your mum called. You left your game at home");
          break;
        case 5:
          $('#message').text('Spare me');
          break;
        case 9:
          $('#message').text("Bowlers always have time to spare.");
          break;
        case 10:
          var messages = ["You're right up my alley", "KingPin", "That’s how I roll", "I hear the bowling thunder", "Strike it up with the gang."]
          $('#message').text(messages[Math.floor(Math.random() * messages.length)])
          break;
        default:
            $('#message').text("")
      }
    }

  $(".pin").click(function(event) {
    var rollNumber = parseInt(event.currentTarget.innerHTML)
    game.addRoll(rollNumber)
    updateScores(rollNumber)
  })

})
