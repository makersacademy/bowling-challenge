$(document).ready(function(){
  var game = new FrameLog()
  updateTotalScore()

  $("#new-game").click(function(event){
    game =  new FrameLog()
    updateTotalScore()
  })

  function updateTotalScore(){
    console.log(game.calculateScore())
    $("#totalScore").text(game.calculateScore())
  }

  $("#1-pin").click(function(event){
    game.addRoll(1)
    updateTotalScore()
    console.log(game)
  })
  $("#2-pin").click(function(event){
    game.addRoll(2)
    updateTotalScore()
  })
  $("#3-pin").click(function(event){
    game.addRoll(3)
    updateTotalScore()
  })
  $("#4-pin").click(function(event){
    game.addRoll(4)
    updateTotalScore()
  })
  $("#5-pin").click(function(event){
    game.addRoll(5)
    updateTotalScore()
  })
  $("#6-pin").click(function(event){
    game.addRoll(6)
    updateTotalScore()
  })
  $("#7-pin").click(function(event){
    game.addRoll(7)
    updateTotalScore()
  })
  $("#8-pin").click(function(event){
    game.addRoll(8)
    updateTotalScore()
  })
  $("#9-pin").click(function(event){
    game.addRoll(9)
    updateTotalScore()
  })
  $("#10-pin").click(function(event){
    game.addRoll(10)
    updateTotalScore()
  })
})
