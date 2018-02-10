$(document).ready(function(){
  var game = new FrameLog()
  updateScores()

  $("#new-game").click(function(event){
    game =  new FrameLog()
    $("#totalScore").text(0)
    for(var i = 0; i < FRAME_LIMIT; i ++){
      $(`#f${i+1}`).text(0)
      $(`#f${i+1}rolls`).text('')
    };
  })

  function updateScores(){
    isGameComplete()
    $("#totalScore").text(game.calculateScore())
      for(var i = 0; i < game.frameCount(); i ++){
        $(`#f${i+1}`).text(game.frames[i].score())
      }
      updateRolls()
    }

    function updateRolls(){
      for(var i = 0; i < game.frameCount(); i ++){
        $(`#f${i+1}rolls`).text(game.frames[i].rolls.toString())
      }
    }

    function isGameComplete(){
      if (game.isFramelogComplete()) $('#complete').text("Frame Score Card Complete")
    }

  $("#0-pin").click(function(event){
    $('#message').text("Never a good time to clean the gutters.")
    game.addRoll(0)
    updateScores()

  })
  $("#1-pin").click(function(event){
    $('#message').text("Knocking them down, one pin at a time")
    game.addRoll(1)
    updateScores()
  })

  $("#2-pin").click(function(event){
    $('#message').text("Your mum called. You left your game at home")
    game.addRoll(2)
    updateScores()
  })
  $("#3-pin").click(function(event){
    $('#message').text("")
    game.addRoll(3)
    updateScores()
  })
  $("#4-pin").click(function(event){
    $('#message').text("")
    game.addRoll(4)
    updateScores()
  })
  $("#5-pin").click(function(event){
    $('#message').text("Bowlers always have time to spare.")
    game.addRoll(5)
    updateScores()
  })
  $("#6-pin").click(function(event){
    $('#message').text("")
    game.addRoll(6)
    updateScores()
  })
  $("#7-pin").click(function(event){
    $('#message').text("")
    game.addRoll(7)
    updateScores()
  })
  $("#8-pin").click(function(event){
    $('#message').text("")
    game.addRoll(8)
    updateScores()
  })
  $("#9-pin").click(function(event){
    $('#message').text('Spare me')
    game.addRoll(9)
    updateScores()
  })
  $("#10-pin").click(function(event){
    var messages = ["You're right up my alley", "KingPin", "That’s how I roll", "I hear the bowling thunder", "Strike it up with the gang."]
    $('#message').text(messages[Math.floor(Math.random() * messages.length)])
    game.addRoll(10)
    updateScores()
  })
})
