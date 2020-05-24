
$(document).ready(function(){
  var roll_reset = new Roll;
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
var roll_11= new Roll;
var roll_12 = new Roll;
var roll_13 = new Roll;
var roll_14 = new Roll;
var roll_15 = new Roll;
var roll_16= new Roll;
var roll_17 = new Roll;
var roll_18 = new Roll;
var roll_19 = new Roll;
var roll_20 = new Roll;


$('.operators').show();
$('#strike').hide();
$('#spare').hide();
$(".number").text(roll_reset.reset());
$(".total").text();

$('#reset').click(function(){
  $('.operators').show();
  $('#strike').hide();
  $('#spare').hide();
  $(".number").text(roll_1.reset());
  $(".total").text(reset());
});

$('#plus_1').click(function() {
   roll_1.up();
  $('#1').text(roll_1.pins);
  strikeCalculator();
  if(roll_1.pins === roll.strike){
  $('#plus_2').fadeOut(2000);
  $('#minus_2').fadeOut(2000);
  $('#2').text(":)");
}
});

//Minus

  $('#minus_1').click(function() {
    roll.down();
   $('#1').text(roll_1.pins);
   strikeCalculator();
  });

  //SPARE

  $('#plus_2').click(function(){
    let limit =(10 - roll_1.pins);
    if (roll_2.pins < limit) {
    roll_2.up();
    $('#2').text(roll_2.pins);
    strikeCalculator();
  }
   if(roll_1.pins + roll_2.pins == roll.strike) {
   spareEffect();
   }
});

//minus

  $('#minus_2').click(function() {
   roll_2.down();
   $('#2').text(roll_2.pins);
   total();
  });

//STRIKE

$('#plus_3').click(function() {
  roll_3.up();
  $('#3').text(roll_3.pins);
  strikeCalculator();
  if (roll_3.pins === roll.strike){
    $('#plus_4').fadeOut(2000);
    $('#minus_4').fadeOut(2000);
    $('#4').text(":)");
  } else {
  }
});


//minus

$('#minus_3').click(function() {
  roll_3.down();
 $('#3').text(roll_3.getCurrentPins());
 strikeCalculator();
});

//SPARE

$('#plus_4').click(function() {
  let limit = 10 - roll_3.pins;
  roll_4.up();
  if (roll_4.pins <= limit) {
    $('#4').text(roll_4.pins);
    strikeCalculator();
  }
  if(roll_3.pins + roll_4.pins == roll.strike) {
  spareEffect();
  }
});
//minus

$('#minus_4').click(function() {
  roll_4.down();
 $('#4').text(roll_4.getCurrentPins());
 total();
});

//STRIKE

$('#plus_5').click(function() {
  roll_5.up();
  $('#5').text(roll_5.pins);
  strikeCalculator();
  if(roll_5.pins === roll_5.strike){
    $('#plus_6').fadeOut(2000);
    $('#minus_6').fadeOut(2000);
    $('#6').text(":)");
  }
  });


  $('#plus_3').click(function() {
    roll_3.up();
    $('#3').text(roll_3.pins);
    strikeCalculator();
    if (roll_3.pins === roll.strike){
      $('#plus_4').fadeOut(2000);
      $('#minus_4').fadeOut(2000);
      $('#4').text(":)");
    }
  });
//minus

$('#minus_5').click(function() {
  roll_5.down();
 $('#5').text(roll_5.pins);
 strikeTotal();
 gameTotal();
});

//SPARE

$('#plus_6').click(function() {
  let limit = 10 - roll_5.pins;
  if (roll_6.getCurrentPins() < limit) {
  roll_6.up();
  strikeCalculator();
  $('#6').text(roll_6.pins);
  $('.total').strikeTotal();
}
  if(roll_5.pins + roll_6.pins == roll.strike) {
  spareEffect();
  }
});


$('#minus_6').click(function() {
  roll_6.down();
 $('#6').text(roll_6.getCurrentPins());
 $('.total').text(total());
});

//STRIKE

$('#plus_7').click(function() {
  roll_7.up();
  strikeCalculator();
  $('#7').text(roll_7.pins);
  $('.total').text(total());
  if (roll_7.pins === roll.strike){
    $('#plus_8').fadeOut(2000);
    $('#minus_8').fadeOut(2000);
    $('#8').text(":)");
  }
});


//minus

$('#minus_7').click(function() {
  roll_7.down();
 $('#7').text(roll_7.getCurrentPins());
 $('.total').text(total());
});

//SPARE

$('#plus_8').click(function() {
  let limit = 10 - roll_7.pins;
  if (roll_8.getCurrentPins() < limit) {
  roll_8.up()
}
  $('#8').text(roll_8.pins);
  $('.total').text(total());
  if(roll_7.pins + roll_8.pins == roll_1.strike) {
  spare();
  }
});

//minus

$('#minus_8').click(function() {
  roll_8.down();
 $('#8').text(roll_8.getCurrentPins());
});

//STRIKE

$('#plus_9').click(function() {
  roll_9.up();
  $('#9').text(roll_9.getCurrentPins());
  $('.total').text(total());
  if (roll_9.pins === roll.strike){
    $('#plus_10').fadeOut(2000);
    $('#minus_10').fadeOut(2000);
    $('#10').text(":)");
  }
});

//minus

$('#minus_9').click(function() {
  roll_9.down();
 $('#9').text(roll_9.getCurrentPins());
 $('.total').text(total());
});


//SPARE

$('#plus_10').click(function() {
  let limit = 10 - roll_9.pins;
  if (roll_10.pins < limit) {
  roll_10.up();
  }
  if(roll_9.pins + roll_10.pins == roll_1.strike) {
  spare();
  }
  $('#10').text(roll_10.pins);
  $('.total').text(total());
});

//minus

$('#minus_10').click(function() {
  roll_10.down();
 $('#10').text(roll_10.getCurrentPins());
 $('.total').text(total());
});

//STRIKE

$('#plus_11').click(function() {
  roll_11.up();
  $('#11').text(roll_11.getCurrentPins());
  $('.total').text(total());
  if(roll_11.pins === roll_11.strike){
      $('#plus_12').fadeOut(2000);
      $('#minus_12').fadeOut(2000);
      $('#12').text(":)");
    }
});

//minus

$('#minus_11').click(function() {
  roll_11.down();
 $('#11').text(roll_11.getCurrentPins());
 $('.total').text(total());
});

//SPARE

$('#plus_12').click(function() {
  let limit = 10 - roll_11.getCurrentPins();
  if (roll_12.getCurrentPins() < limit) {
  roll_12.up();
}
  $('#12').text(roll_12.getCurrentPins());
  if(roll_11.pins + roll_12.pins == roll_1.strike) {
  spare();
  }
  $('.total').text(total());
});

//minus

$('#minus_12').click(function() {
  roll_12.down();
 $('#12').text(roll_12.getCurrentPins());
 $('.total').text(total());
});

//STRIKE

$('#plus_13').click(function() {
  roll_13.up();
  $('#13').text(roll_13.getCurrentPins());
  $('.total').text(total());
  if(roll_13.pins === roll_13.strike){
      $('#plus_14').fadeOut(2000);
      $('#minus_14').fadeOut(2000);
      $('#14').text(":)");
    }
});

//minus

$('#minus_13').click(function() {
  roll_13.down();
  $('.total').text(total());
 $('#13').text(roll_13.getCurrentPins());
});

//SPARE

$('#plus_14').click(function() {
  let limit = 10 - roll_13.getCurrentPins();
  if (roll_14.getCurrentPins() < limit) {
  roll_14.up();
}
  $('#14').text(roll_14.getCurrentPins());
  if(roll_13.pins + roll_14.pins == roll_1.strike) {
  spare();
  }
  $('.total').text(total());
});

//minus

$('#minus_14').click(function() {
  roll_14.down();
 $('#14').text(roll_14.getCurrentPins());
  $('.total').text(total());
});

//STRIKE

$('#plus_15').click(function() {
  roll_15.up();
  $('#15').text(roll_15.getCurrentPins());
  $('.total').text(total());
  if(roll_15.pins === roll_15.strike){
      $('#plus_16').fadeOut(2000);
      $('#minus_16').fadeOut(2000);
      $('#16').text(":)");
    }
});

//minus

$('#minus_15').click(function() {
  roll_15.down();
 $('#15').text(roll_15.getCurrentPins());
  $('.total').text(total());
});

//SPARE

$('#plus_16').click(function() {
  $('#14').text(roll_14.getCurrentPins());
  roll_16.up();
  $('#16').text(roll_16.getCurrentPins());
  $('.total').text(total());
  if(roll_15.pins + roll_16.pins == roll_1.strike) {
  spare();
  }
});

//minus

$('#minus_16').click(function() {
  roll_16.down();
 $('#16').text(roll_16.getCurrentPins());
 $('.total').text(total());
});

//STRIKE

$('#plus_17').click(function() {
  roll_17.up();
  $('#17').text(roll_17.getCurrentPins());
  $('.total').text(total());
  if(roll_17.pins === roll_17.strike){
      $('#plus_18').fadeOut(2000);
      $('#minus_18').fadeOut(2000);
      $('#18').text(":)");
    }
});

//minus
$('#minus_17').click(function() {
  roll_17.down();
 $('#17').text(roll_17.getCurrentPins());
 $('.total').text(total());
});

//SPARE

$('#plus_18').click(function() {
  roll_18.up();
  $('.total').text(total());
  $('#18').text(roll_18.getCurrentPins());
  if(roll_17.pins + roll_18.pins == roll_1.strike) {
  spare();
  }
});

//minus

$('#minus_18').click(function() {
  roll_18.down();
  $('.total').text(total());
 $('#18').text(roll_18.getCurrentPins());
});

//STRIKE

$('#plus_19').click(function() {
  roll_19.up();
  $('.total').text(total());
  $('#19').text(roll_19.getCurrentPins());
  if(roll_19.pins === roll_19.strike){
    $('#plus_20').fadeOut(2000);
    $('#minus_20').fadeOut(2000);
    $('#20').text(":)");
  }
});

//minus

$('#minus_19').click(function() {
  roll_19.down();
  $('.total').text(total());
 $('#19').text(roll_19.getCurrentPins());
});

//SPARE

$('#plus_20').click(function() {
  roll_20.up();
  $('.total').text(total());
  $('#20').text(roll_20.pins);
  if(roll_19.pins + roll_20.pins == roll_1.strike) {
  spareEffect();
  }
});

//minus

$('#minus_20').click(function() {
  roll_20.down();
  $('.total').text(total());
 $('#20').text(roll_20.getCurrentPins());
});



 //   if(roll_1.pins === roll.strike){
 //    $('.total').text(roll_1.pins + ((roll_3.pins + roll_4.pins) * 2));
 //  } else if (roll_3.pins === roll.strike){
 //    $('.total').text(roll_3.pins + ((roll_5.pins + roll_6.pins) * 2));
 //  } else if (roll_5.pins === roll.strike){
 //    $('.total').text(roll_5.pins + ((roll_7.pins + roll_8.pins) * 2));
 //  } else if (roll_7.pins === roll.strike){
 //    $('.total').text(roll_7.pins + ((roll_9.pins + roll_10.pins) * 2));
 //  } else if (roll_9.pins === roll.strike){
 //    $('.total').text(roll_9.pins + ((roll_11.pins + roll_13.pins) * 2));
 //  } else if (roll_11.pins === roll.strike){
 //    $('.total').text(roll_11.pins + ((roll_13.pins + roll_15.pins) * 2));
 //  } else if (roll_13.pins === roll.strike){
 //    $('.total').text(roll_13.pins + ((roll_15.pins + roll_17.pins) * 2));
 //  } else if (roll_15.pins === roll.strike){
 //    $('.total').text(roll_15.pins + ((roll_17.pins + roll_19.pins) * 2));
 // }

function strikeCalculator(){
  if (roll_1.pins === roll.strike) {
    $('#1').text(roll_1.pins + (roll_3.pins + roll_4.pins));
    $('.total').text(roll_1.pins + ((roll_3.pins + roll_4.pins) * 2));

  } else if (roll_1.pins != roll.strike) {
    $('.total').text(roll_1.pins + roll_2.pins + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins
    + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
    + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
  }

  if ((roll_1.pins === roll.strike) && (roll_3.pins === roll.strike)) {
    $('#3').text(roll_3.pins + (roll_5.pins + roll_6.pins));
    $('.total').text(roll_3.pins + ((roll_5.pins + roll_6.pins) * 2));

  } else if ((roll_1.pins != roll.strike) && (roll_3.pins === roll.strike)) {
    $('#3').text(roll_3.pins + (roll_5.pins + roll_6.pins));
    $('.total').text(roll_3.pins + ((roll_5.pins + roll_6.pins) * 2));
  }

  if (roll_5.pins === roll.strike) {
    $('#5').text(roll_5.pins + (roll_7.pins + roll_8.pins));
    $('.total').text(roll_5.pins + ((roll_7.pins + roll_8.pins) * 2));

  } else if (roll_5.pins != roll.strike) {
    // $('.total').text($('#1') + $('#2' ) + $('#3') + $('#4') + $('#5'));
    $('.total').text(roll_1.pins + roll_2.pins + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins
    + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
    + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
  }
}

//
//
//   } else if (roll_7.pins === roll.strike) {
//    $('#7').text(roll_7.pins + (roll_9.pins + roll_11.pins));
//    $('.total').text(roll_7.pins + ((roll_9.pins + roll_11.pins) * 2));
//
//  } else if (roll_7.pins != roll.strike) {
//   $('.total').text(roll_1.pins + roll_2.pins + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins
//      + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//      + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);



  // else if (roll_7.pins === roll.strike) {
  //   $('#7').text(roll_7.pins + (roll_9.pins + roll_11.pins));
  //   $('.total').text(roll_7.pins + ((roll_9.pins + roll_10.pins) * 2));
  // }
  // else if (roll_9.pins === roll.strike) {
  //   $('#9').text(roll_9.pins + (roll_11.pins + roll_13.pins));
  //   $('.total').text(roll_9.pins + ((roll_11.pins + roll_13.pins) * 2));
  // }
  // else if (roll_11.pins === roll.strike) {
  //   $('#11').text(roll_11.pins + (roll_13.pins + roll_15.pins));
  //   $('.total').text(roll_11.pins + ((roll_13.pins + roll_15.pins) * 2));
  // }
  // else if (roll_13.pins === roll.strike) {
  //   $('#13').text(roll_13.pins + (roll_15.pins + roll_17.pins));
  //   $('.total').text(roll_13.pins + ((roll_15.pins + roll_17.pins) * 2));
  // }
  // else if (roll_15.pins === roll.strike) {
  //   $('#15').text(roll_15.pins + (roll_17.pins + roll_19.pins));
  //   $('.total').text(roll_15.pins + ((roll_17.pins + roll_19.pins) * 2));
  // } else {

 function total(){
$('.total').text($('#1') + $('#2' ) + $('#3') + $('#4') + $('#5'));
// + roll_6.pins + roll_7.pins
// + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
// + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
}


  function spareEffect(){
    $("#spare").fadeIn(2000);
    $("#spare").fadeOut(2000);
  }
});
