$(document).ready(function() {
  let game = new Game()

    $('#0').click(function() {
    game.roll(0)
    $('#f1r1').text(game.frame_input[game.frame])
    })

    $('#1').click(function(){
      game.roll(1)
      $('#f1r2').text(game.frame_input[game.frame])
    })

  })


  //
  // $('#2').click(function(){
  //   game.roll(2)
  //   $('#f1r2').text(game.frame_input[game.frame])
  // });
  // $('#3').click(function(){
  //   game.roll(3)
  //   $('#f1r2').text(game.frame_input[game.frame])
  // });
  // $('#4').click(function(){
  //   game.roll(4)
  //   $('#f1r2').text(game.frame_input[game.frame])
  // });
  // $('#5').click(function(){
  //   game.roll(5)
  //   $('#f1r2').text(game.frame_input[game.frame])
  // });
  // $('#6').click(function(){
  //   game.roll(6)
  //   $('#f1r2').text(game.frame_input[game.frame])
  // });
  // $('#7').click(function(){
  //   game.roll(7)
  //   $('#f1r2').text(game.frame_input[game.frame])
  // });
  // $('#8').click(function(){
  //   game.roll(8)
  //   $('#f1r2').text(game.frame_input[game.frame])
  // });
  // $('#9').click(function(){
  //   game.roll(9)
  //   $('#f1r2').text(game.frame_input[game.frame])
  // });
  // $('#10').click(function(){
  //   game.roll(10)
  //   $('#f1r2').text(game.frame_input[game.frame])
  // });
