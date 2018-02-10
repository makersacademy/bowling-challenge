$(document).ready(function(){
  var game = new FrameLog()
  updateScores()

  $("#new-game").click(function(event){
    game =  new FrameLog()
    $("#totalScore").text(0)
    for(var i = 0; i < FRAME_LIMIT; i ++){
      $(`#f${i+1}`).text(0)
    }
  })

  function updateScores(){
    $("#totalScore").text(game.calculateScore())
      for(var i = 0; i < game.frameCount(); i ++){
        $(`#f${i+1}`).text(game.frames[i].score())
      }
  }

  $("#1-pin").click(function(event){
    game.addRoll(1)
    updateScores()
  })

  $("#2-pin").click(function(event){
    game.addRoll(2)
    updateScores()
  })
  $("#3-pin").click(function(event){
    game.addRoll(3)
    updateScores()
  })
  $("#4-pin").click(function(event){
    game.addRoll(4)
    updateScores()
  })
  $("#5-pin").click(function(event){
    game.addRoll(5)
    updateScores()
  })
  $("#6-pin").click(function(event){
    game.addRoll(6)
    updateScores()
  })
  $("#7-pin").click(function(event){
    game.addRoll(7)
    updateScores()
  })
  $("#8-pin").click(function(event){
    game.addRoll(8)
    updateScores()
  })
  $("#9-pin").click(function(event){
    game.addRoll(9)
    updateScores()
  })
  $("#10-pin").click(function(event){
    game.addRoll(10)
    updateScores()
  })
})
