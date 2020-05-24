$(document).ready(function() {

  var game = new Game();
  var currentframe;
  var midframe = false;
  var endframe = false;
  var frametenspare = false;
  var frametenstrike = false;
  var firstroll;

  $('#zeropins').on('click', function(){
    currentframe = game.frames.length + 1

    if (midframe === false && endframe === false){
      $('#frame' + currentframe + 'roll1').text(0);
      midframe = true
      firstroll = 0

    } else if (frametenstrike === true && midframe === true && endframe === false){
      $('#frame10roll2').text(0);
      endframe = true
      midframe = false
      secondroll = 0
    } else if (frametenstrike === true && endframe === true){
      $('#frame10roll3').text(0);
      game.addFrame([firstroll, secondroll, 0])

    } else if (frametenspare === true){
      $('#frame10roll3').text(0);
      game.addFrame([firstroll, secondroll, 0])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 10){
      $('#frame10roll2').text(0);
      frametenspare = true
      secondroll = 0
    } else {
      $('#frame' + currentframe + 'roll2').text(0);
      midframe = false
      game.addFrame([firstroll, 0])
    }

    $('#currenttotal').text(game.calculateCurrentScore());
  });

  $('#onepin').on('click', function(){
    currentframe = game.frames.length + 1

    if (midframe === false && endframe === false){
      $('#frame' + currentframe + 'roll1').text(1);
      midframe = true
      firstroll = 1

    } else if (frametenstrike === true && midframe === true && endframe === false){
      $('#frame10roll2').text(1);
      endframe = true
      midframe = false
      secondroll = 1
    } else if (frametenstrike === true && endframe === true){
      $('#frame10roll3').text(1);
      game.addFrame([firstroll, secondroll, 1])

    } else if (frametenspare === true){
      $('#frame10roll3').text(1);
      game.addFrame([firstroll, secondroll, 1])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 9){
      $('#frame10roll2').text(1);
      frametenspare = true
      secondroll = 1
    } else {
      $('#frame' + currentframe + 'roll2').text(1);
      midframe = false
      game.addFrame([firstroll, 1])
    }

    $('#currenttotal').text(game.calculateCurrentScore());
  });

  $('#twopins').on('click', function(){
    currentframe = game.frames.length + 1

    if (midframe === false && endframe === false){
      $('#frame' + currentframe + 'roll1').text(2);
      midframe = true
      firstroll = 2

    } else if (frametenstrike === true && midframe === true && endframe === false){
      $('#frame10roll2').text(2);
      endframe = true
      midframe = false
      secondroll = 2
    } else if (frametenstrike === true && endframe === true){
      $('#frame10roll3').text(2);
      game.addFrame([firstroll, secondroll, 2])

    } else if (frametenspare === true){
      $('#frame10roll3').text(2);
      game.addFrame([firstroll, secondroll, 2])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 8){
      $('#frame10roll2').text(2);
      frametenspare = true
      secondroll = 2
    } else {
      $('#frame' + currentframe + 'roll2').text(2);
      midframe = false
      game.addFrame([firstroll, 2])
    }

    $('#currenttotal').text(game.calculateCurrentScore());
  });


  $('#threepins').on('click', function(){
    currentframe = game.frames.length + 1

    if (midframe === false && endframe === false){
      $('#frame' + currentframe + 'roll1').text(3);
      midframe = true
      firstroll = 3

    } else if (frametenstrike === true && midframe === true && endframe === false){
      $('#frame10roll2').text(3);
      endframe = true
      midframe = false
      secondroll = 3
    } else if (frametenstrike === true && endframe === true){
      $('#frame10roll3').text(3);
      game.addFrame([firstroll, secondroll, 3])

    } else if (frametenspare === true){
      $('#frame10roll3').text(3);
      game.addFrame([firstroll, secondroll, 3])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 7){
      $('#frame10roll2').text(3);
      frametenspare = true
      secondroll = 3
    } else {
      $('#frame' + currentframe + 'roll2').text(3);
      midframe = false
      game.addFrame([firstroll, 3])
    }

    $('#currenttotal').text(game.calculateCurrentScore());
  });

  $('#fourpins').on('click', function(){
    currentframe = game.frames.length + 1

    if (midframe === false && endframe === false){
      $('#frame' + currentframe + 'roll1').text(4);
      midframe = true
      firstroll = 4

    } else if (frametenstrike === true && midframe === true && endframe === false){
      $('#frame10roll2').text(4);
      endframe = true
      midframe = false
      secondroll = 4
    } else if (frametenstrike === true && endframe === true){
      $('#frame10roll3').text(4);
      game.addFrame([firstroll, secondroll, 4])

    } else if (frametenspare === true){
      $('#frame10roll3').text(4);
      game.addFrame([firstroll, secondroll, 4])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 6){
      $('#frame10roll2').text(4);
      frametenspare = true
      secondroll = 4
    } else {
      $('#frame' + currentframe + 'roll2').text(4);
      midframe = false
      game.addFrame([firstroll, 4])
    }

    $('#currenttotal').text(game.calculateCurrentScore());
  });


  $('#fivepins').on('click', function(){
    currentframe = game.frames.length + 1

    if (midframe === false && endframe === false){
      $('#frame' + currentframe + 'roll1').text(5);
      midframe = true
      firstroll = 5
    } else if (frametenspare === true){
      $('#frame10roll3').text(5);
      game.addFrame([firstroll, secondroll, 5])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 5){
      $('#frame10roll2').text(5);
      frametenspare = true
      secondroll = 5
    } else {
      $('#frame' + currentframe + 'roll2').text(5);
      midframe = false
      game.addFrame([firstroll, 5])
    }

    $('#currenttotal').text(game.calculateCurrentScore());
  });


  $('#sixpins').on('click', function(){
    currentframe = game.frames.length + 1

    if (midframe === false && endframe === false){
      $('#frame' + currentframe + 'roll1').text(6);
      midframe = true
      firstroll = 6

    } else if (frametenstrike === true && midframe === true && endframe === false){
      $('#frame10roll2').text(6);
      endframe = true
      midframe = false
      secondroll = 6
    } else if (frametenstrike === true && endframe === true){
      $('#frame10roll3').text(6);
      game.addFrame([firstroll, secondroll, 6])

      // $('#fivepins').hide();
      // $('#sixpins').hide();
      // $('#sevenpins').hide();
      // $('#eightpins').hide();
      // $('#ninepins').hide();
      // $('#tenpins').hide();

    } else if (frametenspare === true){
      $('#frame10roll3').text(6);
      game.addFrame([firstroll, secondroll, 6])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 4){
      $('#frame10roll2').text(6);
      frametenspare = true
      secondroll = 6
    } else {
      $('#frame' + currentframe + 'roll2').text(6);
      midframe = false
      game.addFrame([firstroll, 6])
    }

    $('#currenttotal').text(game.calculateCurrentScore());
  });



  $('#sevenpins').on('click', function(){
    currentframe = game.frames.length + 1

    if (midframe === false && endframe === false){
      $('#frame' + currentframe + 'roll1').text(7);
      midframe = true
      firstroll = 7

    } else if (frametenstrike === true && midframe === true && endframe === false){
      $('#frame10roll2').text(7);
      endframe = true
      midframe = false
      secondroll = 7
    } else if (frametenstrike === true && endframe === true){
      $('#frame10roll3').text(7);
      game.addFrame([firstroll, secondroll, 7])

    } else if (frametenspare === true){
      $('#frame10roll3').text(7);
      game.addFrame([firstroll, secondroll, 7])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 3){
      $('#frame10roll2').text(7);
      frametenspare = true
      secondroll = 7
    } else {
      $('#frame' + currentframe + 'roll2').text(7);
      midframe = false
      game.addFrame([firstroll, 7])
    }

    $('#currenttotal').text(game.calculateCurrentScore());
  });


  $('#eightpins').on('click', function(){
    currentframe = game.frames.length + 1

    if (midframe === false && endframe === false){
      $('#frame' + currentframe + 'roll1').text(8);
      midframe = true
      firstroll = 8

    } else if (frametenstrike === true && midframe === true && endframe === false){
      $('#frame10roll2').text(8);
      endframe = true
      midframe = false
      secondroll = 8
    } else if (frametenstrike === true && endframe === true){
      $('#frame10roll3').text(8);
      game.addFrame([firstroll, secondroll, 8])

    } else if (frametenspare === true){
      $('#frame10roll3').text(8);
      game.addFrame([firstroll, secondroll, 8])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 2){
      $('#frame10roll2').text(8);
      frametenspare = true
      secondroll = 8
    } else {
      $('#frame' + currentframe + 'roll2').text(8);
      midframe = false
      game.addFrame([firstroll, 8])
    }

    $('#currenttotal').text(game.calculateCurrentScore());
  });


  $('#ninepins').on('click', function(){
    currentframe = game.frames.length + 1

    if (midframe === false && endframe === false){
      $('#frame' + currentframe + 'roll1').text(9);
      midframe = true
      firstroll = 9

    } else if (frametenstrike === true && midframe === true && endframe === false){
      $('#frame10roll2').text(9);
      endframe = true
      midframe = false
      secondroll = 9
    } else if (frametenstrike === true && endframe === true){
      $('#frame10roll3').text(9);
      game.addFrame([firstroll, secondroll, 9])

    } else if (frametenspare === true){
      $('#frame10roll3').text(9);
      game.addFrame([firstroll, secondroll, 9])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 1){
      $('#frame10roll2').text(9);
      frametenspare = true
      secondroll = 9
    } else {
      $('#frame' + currentframe + 'roll2').text(9);
      midframe = false
      game.addFrame([firstroll, 9])
    }

    $('#currenttotal').text(game.calculateCurrentScore());
  });



  $('#tenpins').on('click', function(){
    currentframe = game.frames.length + 1

    if (game.frames.length !== 9 && midframe === false){
      $('#frame' + currentframe + 'roll1').text(10);
      game.addFrame([10, 0])
    } else if (game.frames.length !== 9 && midframe === true) {
      $('#frame' + currentframe + 'roll2').text(10);
      midframe = false
      game.addFrame([firstroll, 10])

    } else if (game.frames.length === 9 && midframe === false && endframe === false){
      $('#frame10roll1').text(10);
      midframe = true
      frametenstrike = true
      firstroll = 10
    } else if (frametenstrike === true && midframe === true && endframe === false){
      $('#frame10roll2').text(10);
      endframe = true
      midframe = false
      secondroll = 10
    } else if (frametenstrike === true && endframe === true){
      $('#frame10roll3').text(10);
      game.addFrame([firstroll, secondroll, 10])

    } else if (frametenspare === true){
      $('#frame10roll3').text(10);
      game.addFrame([firstroll, secondroll, 10])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 0){
      $('#frame10roll2').text(10);
      frametenspare = true
      secondroll = 10
    }

    $('#currenttotal').text(game.calculateCurrentScore());
  });

})
