$(document).ready(function() {

  var game = new Game();
  var currentframe;
  var midframe = false;
  var frametenstrikeorspare = false;
  var firstroll;
  var numbers = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '10': 'ten'
  };

  $('#zeropins').on('click', function(){
    currentframe = game.frames.length + 1

    if (midframe === false){
      $('#frame' + currentframe + 'roll1').text(0);
      midframe = true
      firstroll = 0
    } else if (frametenstrikeorspare === true){
      $('#frame10roll3').text(0);
      game.addFrame([firstroll, secondroll, 0])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 10){
      $('#frame10roll2').text(0);
      frametenstrikeorspare = true
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

    if (midframe === false){
      $('#frame' + currentframe + 'roll1').text(1);
      midframe = true
      firstroll = 1
    } else if (frametenstrikeorspare === true){
      $('#frame10roll3').text(1);
      game.addFrame([firstroll, secondroll, 1])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 9){
      $('#frame10roll2').text(1);
      frametenstrikeorspare = true
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

    if (midframe === false){
      $('#frame' + currentframe + 'roll1').text(2);
      midframe = true
      firstroll = 2
    } else if (frametenstrikeorspare === true){
      $('#frame10roll3').text(2);
      game.addFrame([firstroll, secondroll, 2])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 8){
      $('#frame10roll2').text(2);
      frametenstrikeorspare = true
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

    if (midframe === false){
      $('#frame' + currentframe + 'roll1').text(3);
      midframe = true
      firstroll = 3
    } else if (frametenstrikeorspare === true){
      $('#frame10roll3').text(3);
      game.addFrame([firstroll, secondroll, 3])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 7){
      $('#frame10roll2').text(3);
      frametenstrikeorspare = true
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

    if (midframe === false){
      $('#frame' + currentframe + 'roll1').text(4);
      midframe = true
      firstroll = 4
    } else if (frametenstrikeorspare === true){
      $('#frame10roll3').text(4);
      game.addFrame([firstroll, secondroll, 4])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 6){
      $('#frame10roll2').text(4);
      frametenstrikeorspare = true
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

    if (midframe === false){
      $('#frame' + currentframe + 'roll1').text(5);
      midframe = true
      firstroll = 5
    } else if (frametenstrikeorspare === true){
      $('#frame10roll3').text(5);
      game.addFrame([firstroll, secondroll, 5])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 5){
      $('#frame10roll2').text(5);
      frametenstrikeorspare = true
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

    if (midframe === false){
      $('#frame' + currentframe + 'roll1').text(6);
      midframe = true
      firstroll = 6

      // $('#fivepins').hide();
      // $('#sixpins').hide();
      // $('#sevenpins').hide();
      // $('#eightpins').hide();
      // $('#ninepins').hide();
      // $('#tenpins').hide();

    } else if (frametenstrikeorspare === true){
      $('#frame10roll3').text(6);
      game.addFrame([firstroll, secondroll, 6])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 4){
      $('#frame10roll2').text(6);
      frametenstrikeorspare = true
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

    if (midframe === false){
      $('#frame' + currentframe + 'roll1').text(7);
      midframe = true
      firstroll = 7
    } else if (frametenstrikeorspare === true){
      $('#frame10roll3').text(7);
      game.addFrame([firstroll, secondroll, 7])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 3){
      $('#frame10roll2').text(7);
      frametenstrikeorspare = true
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

    if (midframe === false){
      $('#frame' + currentframe + 'roll1').text(8);
      midframe = true
      firstroll = 8
    } else if (frametenstrikeorspare === true){
      $('#frame10roll3').text(8);
      game.addFrame([firstroll, secondroll, 8])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 2){
      $('#frame10roll2').text(8);
      frametenstrikeorspare = true
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

    if (midframe === false){
      $('#frame' + currentframe + 'roll1').text(9);
      midframe = true
      firstroll = 9
    } else if (frametenstrikeorspare === true){
      $('#frame10roll3').text(9);
      game.addFrame([firstroll, secondroll, 9])
    } else if (game.frames.length === 9 && midframe === true && firstroll === 1){
      $('#frame10roll2').text(9);
      frametenstrikeorspare = true
      secondroll = 9
    } else {
      $('#frame' + currentframe + 'roll2').text(9);
      midframe = false
      game.addFrame([firstroll, 9])
    }

    $('#currenttotal').text(game.calculateCurrentScore());
  });

})
