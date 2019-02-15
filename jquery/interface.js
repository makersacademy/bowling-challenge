$(document).ready(function() {
  var game = new Game()
  var frame = 1
  var turn = 1
  
    $('#0').click(function() {
      game.roll(0)
      $(`#f${game.frame}r${game.turn}`).text(game.frame_input[game.frame])
    })

    $('#1').click(function(){
        game.roll(1)
        $(`#f${game.frame}r${game.turn}`).text(game.frame_input[game.frame])
        console.log(game.turn)
        console.log(game.frame)
      })
    })


    // $('#1').click(function(){
    //   game.roll(1)
    //   $('#f1r1').text(game.frame_input[game.frame])
    // })
    // $('#2').click(function(){
    //   game.roll(2)
    //   $('#f1r1').text(game.frame_input[game.frame])
    // })
    // $('#3').click(function(){
    //   game.roll(3)
    //   $('#f1r1').text(game.frame_input[game.frame])
    // })
    // $('#4').click(function(){
    //   game.roll(4)
    //   $('#f1r1').text(game.frame_input[game.frame])
    // })
    // $('#5').click(function(){
    //   game.roll(5)
    //   $('#f1r1').text(game.frame_input[game.frame])
    // })
    // $('#6').click(function(){
    //   game.roll(6)
    //   $('#f1r1').text(game.frame_input[game.frame])
    // })
    // $('#7').click(function(){
    //   game.roll(7)
    //   $('#f1r1').text(game.frame_input[game.frame])
    // })
