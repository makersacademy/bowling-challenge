$(document).ready(function() {
  var game = new Game()
  var turn = 1
  var frame = 1

    $('#0').click(function() {
      if (turn === 1) {
        game.roll(0)
        $(`#f${frame}r${turn}`).text(game.frame_input[frame])
        turn++
      }
      else {
        game.roll(0)
        $(`#f${frame}r${turn}`).text(game.frame_input[frame][1])
        turn = 1
        $(`#sc${frame}`).text(game.frame_output[frame][0])
        frame++
        console.log(game.frame_output[frame])
        game.check_for_bonus()
        update_scores()
      }
    })

    $('#1').click(function(){
        if (turn === 1) {
          game.roll(1)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame])
          turn++
          $('#10').hide();
        }
        else {
          game.roll(1)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame][1])
          turn = 1
          $(`#sc${frame}`).text(game.frame_output[frame][0])
          frame++
          $("#buttons").show().children().show();
          game.check_for_bonus()
          update_scores()
        }
    })

    $('#2').click(function(){
        if (turn === 1) {
          game.roll(2)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame])
          turn++
          $('#10').hide();
          $('#9').hide();
        }
        else {
          game.roll(2)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame][1])
          turn = 1
          $(`#sc${frame}`).text(game.frame_output[frame][0])
          frame++
          $("#buttons").show().children().show();
        }
    })

    $('#3').click(function(){
        if (turn === 1) {
          game.roll(3)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame])
          turn++
          $('#10').hide();
          $('#9').hide();
          $('#8').hide();
        }
        else {
          game.roll(3)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame][1])
          turn = 1
          $(`#sc${frame}`).text(game.frame_output[frame][0])
          frame++
          $("#buttons").show().children().show();
        }
    })

    $('#4').click(function(){
        if (turn === 1) {
          game.roll(4)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame])
          turn++
          $('#10').hide();
          $('#9').hide();
          $('#8').hide();
          $('#7').hide();
        }
        else {
          game.roll(4)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame][1])
          turn = 1
          $(`#sc${frame}`).text(game.frame_output[frame][0])
          frame++
          $("#buttons").show().children().show();
        }
    })

    $('#5').click(function(){
        if (turn === 1) {
          game.roll(5)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame])
          turn++
          $('#10').hide();
          $('#9').hide();
          $('#8').hide();
          $('#7').hide();
          $('#6').hide();
        }
        else {
          game.roll(5)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame][1])
          turn = 1
          $(`#sc${frame}`).text(game.frame_output[frame][0])
          frame++
          $("#buttons").show().children().show();
        }
    })

    $('#6').click(function(){
        if (turn === 1) {
          game.roll(6)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame])
          turn++
          $('#10').hide();
          $('#9').hide();
          $('#8').hide();
          $('#7').hide();
          $('#6').hide();
          $('#5').hide();
        }
        else {
          game.roll(6)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame][1])
          turn = 1
          $(`#sc${frame}`).text(game.frame_output[frame][0])
          frame++
          $("#buttons").show().children().show();
        }
    })

    $('#7').click(function(){
        if (turn === 1) {
          game.roll(7)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame])
          turn++
          $('#10').hide();
          $('#9').hide();
          $('#8').hide();
          $('#7').hide();
          $('#6').hide();
          $('#5').hide();
          $('#4').hide();
        }
        else {
          game.roll(7)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame][1])
          turn = 1
          $(`#sc${frame}`).text(game.frame_output[frame][0])
          frame++
          $("#buttons").show().children().show();
        }
    })

    $('#8').click(function(){
        if (turn === 1) {
          game.roll(8)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame])
          turn++
          $('#10').hide();
          $('#9').hide();
          $('#8').hide();
          $('#7').hide();
          $('#6').hide();
          $('#5').hide();
          $('#4').hide();
          $('#3').hide();
        }
        else {
          game.roll(8)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame][1])
          turn = 1
          $(`#sc${frame}`).text(game.frame_output[frame][0])
          frame++
          $("#buttons").show().children().show();
        }
    })

    $('#9').click(function(){
        if (turn === 1) {
          game.roll(9)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame])
          turn++
          $('#10').hide();
          $('#9').hide();
          $('#8').hide();
          $('#7').hide();
          $('#6').hide();
          $('#5').hide();
          $('#4').hide();
          $('#3').hide();
          $('#2').hide();
        }
        else {
          game.roll(9)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame][1])
          turn = 1
          $(`#sc${frame}`).text(game.frame_output[frame][0])
          frame++
          $("#buttons").show().children().show();
        }
    })

    $('#10').click(function(){
        if (turn === 1) {
          game.roll(10)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame])
          $(`#sc${frame}`).text(game.frame_output[frame][0])
          frame++
        }
        else {
          game.roll(10)
          $(`#f${frame}r${turn}`).text(game.frame_input[frame][1])
          turn = 1
          $(`#sc${frame}`).text(game.frame_output[frame][0])
          frame++
          $("#buttons").show().children().show();
        }
    })

    function update_scores() {
      location.reload();
    }

})
