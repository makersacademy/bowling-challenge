$(document).ready(function(){
  var bowling = new Bowling();

  $('#btnNew').click(function(){
    reset();
  });

  // scripts for buttons clicked when playing

  $('#btn0').click(function(){
    var pins = bowling.play(0);
    setView();
    setButtons();
  });
  $('#btn1').click(function(){
    var pins = bowling.play(1);
    setView();
    setButtons();
  });
  $('#btn2').click(function(){
    var pins = bowling.play(2);
    setView();
    setButtons();
  });
  $('#btn3').click(function(){
    var pins = bowling.play(3);
    setView();
    setButtons();
  });
  $('#btn4').click(function(){
    var pins = bowling.play(4);
    setView();
    setButtons();
  });
  $('#btn5').click(function(){
    var pins = bowling.play(5);
    setView();
    setButtons();
  });
  $('#btn6').click(function(){
    var pins = bowling.play(6);
    setView();
    setButtons();
  });
  $('#btn7').click(function(){
    var pins = bowling.play(7);
    setView();
    setButtons();
  });
  $('#btn8').click(function(){
    var pins = bowling.play(8);
    setView();
    setButtons();
  });
  $('#btn9').click(function(){
    var pins = bowling.play(9);
    setView();
    setButtons();
  });
  $('#btn10').click(function(){
    var pins = bowling.play(10);
    setView();
    setButtons();
  });

  // end of scripts for buttons ckicked when playing

  function setView(){
    $('#f11').html(bowling.display[0]);
    $('#f12').html(bowling.display[1]);
    $('#f21').html(bowling.display[2]);
    $('#f22').html(bowling.display[3]);
    $('#f31').html(bowling.display[4]);
    $('#f32').html(bowling.display[5]);
    $('#f41').html(bowling.display[6]);
    $('#f42').html(bowling.display[7]);
    $('#f51').html(bowling.display[8]);
    $('#f52').html(bowling.display[9]);
    $('#f61').html(bowling.display[10]);
    $('#f62').html(bowling.display[11]);
    $('#f71').html(bowling.display[12]);
    $('#f72').html(bowling.display[13]);
    $('#f81').html(bowling.display[14]);
    $('#f82').html(bowling.display[15]);
    $('#f91').html(bowling.display[16]);
    $('#f92').html(bowling.display[17]);
    $('#ff1').html(bowling.display[18]);
    $('#ff2').html(bowling.display[19]);
    $('#ff3').html(bowling.display[20]);

    $('#fs1').html(bowling.totals[0]);
    $('#fs2').html(bowling.totals[1]);
    $('#fs3').html(bowling.totals[2]);
    $('#fs4').html(bowling.totals[3]);
    $('#fs5').html(bowling.totals[4]);
    $('#fs6').html(bowling.totals[5]);
    $('#fs7').html(bowling.totals[6]);
    $('#fs8').html(bowling.totals[7]);
    $('#fs9').html(bowling.totals[8]);
    $('#fs10').html(bowling.totals[9]);

    if(bowling.display.length === 20 && (bowling.display[18] + bowling.display[19] < 10)) {
      hideButtons();
    }

    if(bowling.display[20]) {
      hideButtons();
    }
  }

  function reset(){
    bowling.reset();
    $('.btnNumber').css('visibility', 'visible');
    $('.topLeft').html('');
    $('.topRight').html('');
    $('.topRightTen').html('');
    $('.bottomScore').html('');
    $('.maxScore').html('');
    $('.finalScore').html('');

  }

  function hideButtons(){
    $('.btnNumber').css('visibility', 'hidden');
    $('.finalScore').html(bowling.totals[9]);
  }

  function setButtons(){
    if(bowling.display.length % 2 === 1){
      var remaining = 10 - bowling.display[bowling.display.length-1];
      $('.btnNumber').css('visibility', 'hidden');

      for(var i = 0; i < (remaining + 1); i++) {
        // var btn = 'btn' + toString(i);
        // console.log(btn);
        $('#btn' + i).css('visibility', 'visible');
      }
      if(bowling.display.length === 19 && bowling.display[18] === 'X'){
        $('.btnNumber').css('visibility', 'visible');
      }
      if(bowling.display[20]) { hideButtons(); }
    }
    else {
      $('.btnNumber').css('visibility', 'visible');
    }
  }
});
