$(document).ready(function(){
  var game = new Game
  var frame = new Frame 

  $('#bowl').click(function(){
    // update()
    game.bowl()
    console.log(game.framecount)
    console.log(game.score)
    // console.log(frame.pinsStanding)
    // console.log(frame.firstRoll)
    // console.log(frame.secondRoll)
    // console.log(game.frames)
    // cannot get frame information here
    update()


  })



  function update(){
    $('#frame').text(game.framecount)
    $('#score').text(game.score)
    // $('#remain').text(frame.pinsStanding)
    $('#roll').text(game.roll)
  }



});