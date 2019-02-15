$(document).ready(function() {
  var game = new Game()
  var turn = 1
  var frame = 1

    $('#0').click(function() {
      game.roll(0)
      $(`#f${game.frame}r${turn}`).text(game.frame_input[game.frame])
    })

    $('#1').click(function(){
        if (turn === 1) {
          game.roll(1)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame])
          turn++
        }
        else {
          game.roll(1)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame][1])
          turn = 1
          frame++
        }
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
