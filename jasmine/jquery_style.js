$(document).ready(function(){
  $('#strike').hide();
  $('#spare').hide();

  var roll = new Roll;
  var roll_1 = new Roll;
  var roll_2 = new Roll;
  var roll_3 = new Roll;
  var roll_4 = new Roll;
  var roll_5 = new Roll;
  var roll_6 = new Roll;
  var roll_7 = new Roll;
  var roll_8 = new Roll;
  var roll_9 = new Roll;
  var roll_10 = new Roll;
  var roll_11 = new Roll;
  var roll_12 = new Roll;
  var roll_13 = new Roll;
  var roll_14 = new Roll;
  var roll_15 = new Roll;
  var roll_16 = new Roll;
  var roll_17 = new Roll;
  var roll_18 = new Roll;
  var roll_19 = new Roll;
  var roll_20 = new Roll;
  var roll_21 = new Roll;
  var roll_22 = new Roll;
  // var roll_23 = new Roll;
  // var roll_24 = new Roll;
  var reset = new Roll;
  score = []


  $('#plus_1').click(function(){
    roll_1.up();
    $('#1').text(roll_1.pins);
    score.push(roll_1.pins)
    $('.total').text(score.length);
    if(roll_1.pins === roll.strike){
    $('#2').text("X");
    }
  });

  $('#minus_1').click(function(){
    roll_1.down();
    score.pop();
    $('#1').text(roll_1.pins);
    $('.total').text(score.length);
  });

  $('#plus_2').click(function(){
    roll.limit(roll_1, roll_2);
    $('#2').text(roll_2.pins);
    score.push(roll_2.pins);
    $('.total').text(score.length);
    $('#2').text(spare(roll_1, roll_2));
  });

  $('#minus_2').click(function(){
   roll_2.down();
   score.pop();
   $('#2').text(roll_2.pins);
   $('.total').text(score.length);
  });


  $('#plus_3').click(function(){
    roll_3.up();
    $('#3').text(roll_3.pins);
    score.push(roll_3.pins)
    $('.total').text(score.length);
    if(roll_3.pins === roll.strike){
    $('#4').text("X");
    }

    if((roll_1.pins === roll.strike) || (roll_1.pins + roll_2.pins === roll.spare)){
    $('#1').text(roll_1.pins + roll_3.pins);
    score.push(roll_3.pins);
    $('.total').text(score.length);
    }
  });

  $('#minus_3').click(function(){
   roll_3.down();
   score.pop();
   $('#3').text(roll_3.pins);
   $('.total').text(score.length);
  });


  $('#plus_4').click(function(){
    roll.limit(roll_3, roll_4);
    $('#4').text(roll_4.pins);
    $('#4').text(spare(roll_3, roll_4));
    score.push(roll_4.pins);
    $('.total').text(score.length);

    if(roll_1.pins === roll.strike){
    $('#1').text(roll_1.pins + roll_3.pins + roll_4.pins);
    score.push(roll_4.pins);
    $('.total').text(score.length);
    }
  });

  $('#minus_4').click(function(){
    roll_4.down();
    score.pop()
   $('#4').text(roll_4.pins);
   $('.total').text(score.length);
  });


  $('#plus_5').click(function() {
    roll_5.up();
    $('#5').text(roll_5.pins);
    score.push(roll_5.pins)
    $('.total').text(score.length);
    if(roll_5.pins === roll.strike){
    $('#6').text("X");
  }
    if (roll_1.pins === roll.strike && roll_3.pins === roll.strike){
      $('#1').text(roll_1.pins + roll_3.pins + roll_5.pins);
      score.push(roll_3.pins + roll_5.pins);
    }

    if((roll_3.pins === roll.strike) || (roll_3.pins + roll_4.pins === roll.spare)){
    $('#3').text(roll_3.pins + roll_5.pins);
    score.push(roll_5.pins);
    $('.total').text(score.length);
    }
  });

  $('#minus_5').click(function() {
    roll_5.down();
    score.pop();
    $('#5').text(roll_5.pins);
    $('.total').text(score.length);
  });

  $('#plus_6').click(function() {
    roll.limit(roll_5, roll_6);
    $('#6').text(roll_6.pins);
    score.push(roll_6.pins);
    $('#6').text(spare(roll_5, roll_6));
    $('.total').text(score.length);
    if(roll_3.pins === roll.strike){
        $('#5').text(roll_3.pins + roll_5.pins + roll_6.pins);
        score.push(roll_6.pins);
        $('.total').text(score.length);
    }
  });

    $('#minus_6').click(function() {
      roll_5.down();
      score.pop();
      $('#6').text(roll_5.pins);
      $('.total').text(score.length);
    });


    $('#plus_7').click(function() {
      roll_7.up();
      $('#7').text(roll_7.pins);
      score.push(roll_7.pins)
      $('.total').text(score.length);
        if(roll_7.pins === roll.strike){
         $('#8').text("X");
        }
        if (roll_3.pins === roll.strike && roll_5.pins === roll.strike){
          $('#3').text(roll_3.pins + roll_5.pins + roll_7.pins);
          score.push(roll_5.pins + roll_7.pins);
        }
        if((roll_5.pins === roll.strike) || (roll_5.pins + roll_6.pins === roll.spare)){
          $('#5').text(roll_5.pins + roll_7.pins);
          score.push(roll_7.pins);
          $('.total').text(score.length);
        }
    });

    $('#minus_7').click(function() {
      roll_7.down()
      score.pop();
      $('#7').text(roll_7.pins);
      $('.total').text(score.length);
  });

  $('#plus_8').click(function() {
      roll.limit(roll_7, roll_8);
      $('#8').text(roll_8.pins);
      score.push(roll_8.pins);
      $('#8').text(spare(roll_7, roll_8));
      $('.total').text(score.length);

      if(roll_5.pins === roll.strike){
        $('#5').text(roll_5.pins + roll_7.pins + roll_8.pins);
        score.push(roll_8.pins);
        $('.total').text(score.length);
      }
    });

    $('#minus_8').click(function() {
      roll_8.down()
      score.pop();
     $('#8').text(roll_8.pins);
      $('.total').text(score.length);
    });


    $('#plus_9').click(function() {
      roll_9.up();
      $('#9').text(roll_9.pins);
      score.push(roll_9.pins)
      $('.total').text(score.length);
      if(roll_9.pins === roll.strike){
      $('#10').text("X");
    }
      if (roll_5.pins === roll.strike && roll_7.pins === roll.strike){
        $('#5').text(roll_5.pins + roll_7.pins + roll_9.pins);
        score.push(roll_7.pins + roll_9.pins);
      }

      if((roll_7.pins === roll.strike) || (roll_7.pins + roll_8.pins === roll.spare)){
      $('#7').text(roll_7.pins + roll_9.pins);
      score.push(roll_9.pins);
      $('.total').text(score.length);
      }
    });
// //minus
//
    $('#minus_9').click(function() {
      roll_9.down()
      score.pop();
     $('#9').text(roll_9.pins);
      $('.total').text(score.length);
    });
//

  $('#plus_10').click(function() {
      roll.limit(roll_9, roll_10);
      $('#10').text(roll_10.pins);
      score.push(roll_10.pins);
      $('#10').text(spare(roll_9, roll_10));
      $('.total').text(score.length);

    if(roll_7.pins === roll.strike){
      $('#7').text(roll_7.pins + roll_9.pins + roll_10.pins);
      score.push(roll_10.pins);
      $('.total').text(score.length);
      }
    });

    $('#minus_10').click(function() {
      roll_10.down()
      score.pop();
     $('#10').text(roll_10.pins);
      $('.total').text(score.length);
    });


    $('#plus_11').click(function() {
      roll_11.up();
      $('#11').text(roll_11.pins);
      score.push(roll_11.pins)
      $('.total').text(score.length);
      if(roll_11.pins === roll.strike){
      $('#12').text("X");
    }

    if (roll_7.pins === roll.strike && roll_9.pins === roll.strike){
      $('#7').text(roll_7.pins + roll_9.pins + roll_11.pins);
      score.push(roll_9.pins + roll_11.pins);
    }

      if((roll_9.pins === roll.strike) || (roll_9.pins + roll_10.pins === roll.spare)){
      $('#9').text(roll_9.pins + roll_11.pins);
      score.push(roll_11.pins);
      $('.total').text(score.length);
      }
    });
// //minus
//
    $('#minus_11').click(function() {
    roll_10.down()
    score.pop();
   $('#11').text(roll_11.pins);
    $('.total').text(score.length);
  });
//
// //SPARE
//
   $('#plus_12').click(function() {
    roll.limit(roll_11, roll_12);
    $('#12').text(roll_12.pins);
    score.push(roll_12.pins);
    $('#12').text(spare(roll_11, roll_12));
    $('.total').text(score.length);

  if(roll_9.pins === roll.strike){
    $('#9').text(roll_9.pins + roll_12.pins);
    score.push(roll_12.pins);
    $('.total').text(score.length);
    }
  });
//
// //minus
  $('#minus_12').click(function() {
    roll_12.down()
    score.pop();
   $('#12').text(roll_12.pins);
    $('.total').text(score.length);
  });
//
// //STRIKE
//
    $('#plus_13').click(function() {
    roll_13.up();
    $('#13').text(roll_13.pins);
    score.push(roll_13.pins)
    $('.total').text(score.length);
    if(roll_13.pins === roll.strike){
    $('#14').text("X");
  }

  if (roll_9.pins === roll.strike && roll_11.pins === roll.strike){
    $('#9').text(roll_9.pins + roll_11.pins + roll_13.pins);
    score.push(roll_11.pins + roll_13.pins);
  }

    if((roll_11.pins === roll.strike) || (roll_11.pins + roll_12.pins === roll.spare)){
    $('#11').text(roll_11.pins + roll_13.pins);
    score.push(roll_13.pins);
    $('.total').text(score.length);
    }
  });
// //minus
//
  $('#minus_13').click(function() {
    roll_13.down()
    score.pop();
   $('#13').text(roll_13.pins);
    $('.total').text(score.length);
  });
//
// //SPARE
//
  $('#plus_14').click(function() {
   roll.limit(roll_13, roll_14);
   $('#14').text(roll_14.pins);
   score.push(roll_14.pins);
   $('#14').text(spare(roll_13, roll_14));
   $('.total').text(score.length);

  if(roll_11.pins === roll.strike){
   $('#11').text(roll_11.pins + roll_13.pins + roll_14.pins);
   score.push(roll_14.pins);
   $('.total').text(score.length);
   }
  });

  $('#minus_14').click(function() {
    roll_14.down()
    score.pop();
   $('#14').text(roll_14.pins);
    $('.total').text(score.length);
  });

  $('#plus_15').click(function() {
    roll_15.up();
    $('#15').text(roll_15.pins);
    score.push(roll_15.pins)
    $('.total').text(score.length);
     if(roll_15.pins === roll.strike){
       $('#16').text("X");
     }

     if (roll_11.pins === roll.strike && roll_13.pins === roll.strike){
       $('#11').text(roll_11.pins + roll_13.pins + roll_15.pins);
       score.push(roll_13.pins + roll_15.pins);
     }

     if((roll_13.pins === roll.strike) || (roll_13.pins + roll_14.pins === roll.spare)){
       $('#13').text(roll_13.pins + roll_15.pins);
       score.push(roll_15.pins);
       $('.total').text(score.length);
     }
   });

  $('#minus_15').click(function() {
    roll_15.down()
    score.pop();
    $('#15').text(roll_15.pins);
    $('.total').text(score.length);
  });

  $('#plus_16').click(function() {
    roll.limit(roll_15, roll_16);
    $('#16').text(roll_16.pins);
    score.push(roll_16.pins);
    $('#16').text(spare(roll_15, roll_16));
    $('.total').text(score.length);
      if(roll_13.pins === roll.strike){
         $('#13').text(roll_13.pins + roll_15.pins + roll_16.pins);
         score.push(roll_16.pins);
         $('.total').text(score.length);
       }
    });

  $('#minus_16').click(function() {
    roll_16.down()
    score.pop();
    $('#16').text(roll_16.pins);
    $('.total').text(score.length);
  });

  $('#plus_17').click(function() {
    roll_17.up();
    $('#17').text(roll_17.pins);
    score.push(roll_17.pins)
    $('.total').text(score.length);
      if(roll_17.pins === roll.strike){
        $('#18').text("X");
       }

     if (roll_13.pins === roll.strike && roll_15.pins === roll.strike){
       $('#13').text(roll_13.pins + roll_15.pins + roll_17.pins);
       score.push(roll_15.pins + roll_17.pins);
     }
      if((roll_15.pins === roll.strike) || (roll_15.pins + roll_16.pins === roll.spare)){
        $('#15').text(roll_15.pins + roll_17.pins);
        score.push(roll_17.pins);
        $('.total').text(score.length);
      }
  });

  $('#minus_17').click(function() {
    roll_17.down()
    score.pop();
    $('#17').text(roll_17.pins);
    $('.total').text(score.length);
  });

  $('#plus_18').click(function() {
    roll.limit(roll_17, roll_18);
    $('#18').text(roll_18.pins);
    score.push(roll_18.pins);
    $('#18').text(spare(roll_17, roll_18));
    $('.total').text(score.length);
    if(roll_15.pins === roll.strike){
      $('#15').text(roll_15.pins + roll_17.pins + roll_18.pins);
      score.push(roll_18.pins);
      $('.total').text(score.length);
      }
  });

  $('#minus_18').click(function() {
    roll_18.down()
    score.pop();
    $('#18').text(roll_18.pins);
    $('.total').text(score.length);
  });

  $('#plus_19').click(function() {
    roll_19.up();
    $('#19').text(roll_19.pins);
    score.push(roll_19.pins)
    $('.total').text(score.length);
    if(roll_19.pins === roll.strike){
      $('#20').text("X");
    }

    if (roll_15.pins === roll.strike && roll_17.pins === roll.strike){
      $('#15').text(roll_15.pins + roll_17.pins + roll_19.pins);
      score.push(roll_17.pins + roll_19.pins);
    }

    if((roll_17.pins === roll.strike) || (roll_17.pins + roll_18.pins === roll.spare)){
      $('#17').text(roll_17.pins + roll_19.pins);
      score.push(roll_17.pins);
      $('.total').text(score.length);
    }
  });

  $('#minus_19').click(function() {
    roll_19.down()
    score.pop();
    $('#19').text(roll_19.pins);
    $('.total').text(score.length);
    });

  $('#plus_20').click(function() {
    roll.limit(roll_19, roll_20);
    $('#20').text(roll_20.pins);
    score.push(roll_20.pins);
    $('#20').text(spare(roll_19, roll_20));
    $('.total').text(score.length);

    if(roll_17.pins === roll.strike){
      $('#17').text(roll_17.pins + roll_19.pins + roll_20.pins);
      score.push(roll_20.pins);
      $('.total').text(score.length);
     }
  });

  $('#minus_20').click(function() {
    roll_20.down()
    score.pop();
    $('#20').text(roll_20.pins);
    $('.total').text(score.length);
  });


  $('#plus_21').click(function() {
    roll_21.up();
    $('#21').text(roll_21.pins);
    score.push(roll_21.pins)
    $('.total').text(score.length);
    if(roll_21.pins === roll.strike){
      $('#22').text("X");
    }

    if (roll_17.pins === roll.strike && roll_19.pins === roll.strike){
      $('#17').text(roll_17.pins + roll_19.pins + roll_21.pins);
      score.push(roll_19.pins + roll_21.pins);
    }

    if((roll_19.pins === roll.strike) || (roll_19.pins + roll_20.pins === roll.spare)){
      $('#19').text(roll_19.pins + roll_21.pins);
      score.push(roll_21.pins);
      $('.total').text(score.length);
    }
  });

  $('#minus_21').click(function() {
    roll_21.down()
    score.pop();
    $('#21').text(roll_21.pins);
    $('.total').text(score.length);
  });

  $('#plus_22').click(function() {
    roll.limit(roll_21, roll_22);
    $('#22').text(roll_22.pins);
    score.push(roll_22.pins);
    $('#22').text(spare(roll_21, roll_22));
    $('.total').text(score.length);

    if(roll_19.pins === roll.strike){
      $('#19').text(roll_19.pins + roll_21.pins + roll_22.pins);
      score.push(roll_22.pins);
      $('.total').text(score.length);
     }
  });

  $('#minus_22').click(function() {
    roll_22.down()
    score.pop();
    $('#22').text(roll_22.pins);
    $('.total').text(score.length);
  });


  $('#reset').click(function(){
    score = []
    $('#1').text(roll_1.pins = score.length);
    $('#2').text(roll_2.pins = score.length);
    $('#3').text(roll_3.pins = score.length);
    $('#4').text(roll_4.pins = score.length);
    $('#5').text(roll_5.pins = score.length);
    $('#6').text(roll_6.pins = score.length);
    $('#7').text(roll_7.pins = score.length);
    $('#8').text(roll_8.pins = score.length);
    $('#9').text(roll_9.pins = score.length);
    $('#10').text(roll_10.pins = score.length);
    $('#11').text(roll_11.pins = score.length);
    $('#12').text(roll_12.pins = score.length);
    $('#13').text(roll_13.pins = score.length);
    $('#14').text(roll_14.pins = score.length);
    $('#15').text(roll_15.pins = score.length);
    $('#16').text(roll_16.pins = score.length);
    $('#17').text(roll_17.pins = score.length);
    $('#18').text(roll_18.pins = score.length);
    $('#19').text(roll_19.pins = score.length);
    $('#20').text(roll_20.pins = score.length);
    $('#21').text(roll_17.pins = score.length);
    $('#22').text(roll_18.pins = score.length);
    // $('#23').text(roll_19.pins = score.length);
    // $('#24').text(roll_20.pins = score.length);
    $(".total").text(score.length);
    $('.operators').show();
    $('#strike').hide();
    $('#spare').hide();
  });

  function spare(roll_1, roll_2){
    if(roll_1.pins + roll_2.pins == roll.strike){
      return ("/");
    }
  }

});
