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
  score = []

  $('#reset').click(function(){
    reset();
  });

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
    $('#1').text(roll_1.pins);
    total(roll_1.pins);
    $('.total').text(total());
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
   $('#2').text(roll_2.pins);
   $('.total').text(total());
  });


  $('#plus_3').click(function(){
    roll_3.up();
    $('#3').text(roll_3.pins);
    score.push(roll_3.pins)
    $('.total').text(score.length);
    if(roll_3.pins === roll.strike){
    $('#4').text("X");
    }

    if(roll_1.pins === roll.strike){
    $('#1').text(roll_1.pins + roll_3.pins);
    score.push(roll_3.pins);
    $('.total').text(score.length);
    }
  });

  $('#minus_3').click(function(){
   roll_3.down();
   $('#3').text(roll_3.pins);
   $('.total').text(total());
  });


  $('#plus_4').click(function(){
    roll.limit(roll_3, roll_4);
    // roll_4.up();
    $('#4').text(roll_4.pins);
    $('#4').text(spare(roll_3, roll_4));
    score.push(roll_4.pins);
    $('.total').text(score.length);

    if(roll_1.pins === roll.strike){
    $('#1').text(roll_1.pins + roll_4.pins);
    score.push(roll_4.pins);
    $('.total').text(score.length);
    }
  });

  $('#minus_4').click(function(){
    roll_4.down();
   $('#4').text(roll_4.pins);
   $('.total').text(total());
  });


  $('#plus_5').click(function() {
    roll_5.up();
    $('#5').text(roll_5.pins);
    score.push(roll_5.pins)
    $('.total').text(score.length);

    if(roll_3.pins === roll.strike){
    $('#3').text(roll_3.pins + roll_5.pins);
    score.push(roll_5.pins);
    $('.total').text(score.length);
    }
  });

    $('#minus_5').click(function() {
      roll_5.down();
     $('#5').text(roll_5.pins);
     ('.total').text(total());
    });

// //
  $('#plus_6').click(function() {
    roll.limit(roll_5, roll_6);
    roll_6.up();
    $('#6').text(roll_6.pins);
    score.push(roll_6.pins);
    $('#6').text(spare(roll_5, roll_6));
    $('.total').text(score.length);

    if(roll_5.pins === roll.strike){
    $('#5').text(roll_5.pins + roll_6.pins);
    score.push(roll_6.pins);
    $('.total').text(score.length);
    }
    });

  $('#minus_6').click(function() {
    roll_6.down();
   $('#6').text(roll_6.pins);
   ('.total').text(total());
  });

  $('#plus_7').click(function() {
    roll_7.up();
    $('#7').text(roll_7.pins);
    score.push(roll_7.pins)
    $('.total').text(score.length);

    if(roll_5.pins === roll.strike){
    $('#5').text(roll_5.pins + roll_7.pins);
    score.push(roll_7.pins);
    $('.total').text(score.length);
    }
  });

//
// //minus
//
// $('#minus_7').click(function() {
//   roll_7.down();
//  $('#7').text(roll_7.getCurrentPins());
//  $('.total').text(total());
// });
//
// //SPARE
//
// $('#plus_8').click(function() {
//   let limit = 10 - roll_7.pins;
//   if (roll_8.getCurrentPins() < limit) {
//   roll_8.up()
//   $('#8').text(roll_8.pins);
//   rollCalculator();
// }
// if(roll_7.pins + roll_8.pins == roll.strike) {
//   $('#8').text("/");
// }
// });
//
// //minus
//
// $('#minus_8').click(function() {
//   roll_8.down();
//  $('#8').text(roll_8.getCurrentPins());
//  $('.total').text(total());
// });
//
// //STRIKE
//
// $('#plus_9').click(function() {
//   roll_9.up();
//   $('#9').text(roll_9.getCurrentPins());
//   rollCalculator();
// });
//
// //minus
//
// $('#minus_9').click(function() {
//   roll_9.down();
//  $('#9').text(roll_9.getCurrentPins());
//  $('.total').text(total());
// });
//
//
// //SPARE
//
// $('#plus_10').click(function() {
//   let limit = 10 - roll_9.pins;
//   if (roll_10.pins < limit) {
//   roll_10.up();
//   $('#10').text(roll_10.pins);
//   rollCalculator();
//   }
//   if(roll_9.pins + roll_10.pins == roll.strike) {
//     $('#10').text("/");
//   }
// });
//
// //minus
//
// $('#minus_10').click(function() {
//   roll_10.down();
//  $('#10').text(roll_10.getCurrentPins());
//  $('.total').text(total());
// });
//
// //STRIKE
//
// $('#plus_11').click(function() {
//   roll_11.up();
//   $('#11').text(roll_11.getCurrentPins());
//   rollCalculator();
// });
//
// //minus
//
// $('#minus_11').click(function() {
//   roll_11.down();
//  $('#11').text(roll_11.getCurrentPins());
//   $('.total').text(total());
//
// });
//
// //SPARE
//
// $('#plus_12').click(function() {
//   let limit = 10 - roll_11.getCurrentPins();
//   if (roll_12.getCurrentPins() < limit) {
//   roll_12.up();
//   $('#12').text(roll_12.getCurrentPins());
//   rollCalculator();
// }
// if(roll_11.pins + roll_12.pins == roll.strike) {
//   $('#12').text("/");
// }
// });
//
// //minus
//
// $('#minus_12').click(function() {
//   roll_12.down();
//  $('#12').text(roll_12.getCurrentPins());
//  $('.total').text(total());
// });
//
// //STRIKE
//
// $('#plus_13').click(function() {
//   roll_13.up();
//   $('#13').text(roll_13.getCurrentPins());
//   $('.total').text(total());
//   rollCalculator()
// });
//
// //minus
//
// $('#minus_13').click(function() {
//   roll_13.down();
//   $('.total').text(total());
//  $('#13').text(roll_13.getCurrentPins());
// });
//
// //SPARE
//
// $('#plus_14').click(function() {
//   let limit = 10 - roll_13.getCurrentPins();
//   if (roll_14.getCurrentPins() < limit) {
//   roll_14.up();
//   $('#14').text(roll_14.getCurrentPins());
//    rollCalculator();
//   }
//   if(roll_13.pins + roll_14.pins == roll.strike) {
//     $('#14').text("/");
//   }
// });
//
// //minus
//
// $('#minus_14').click(function() {
//   roll_14.down();
//  $('#14').text(roll_14.getCurrentPins());
//   $('.total').text(total());
// });
//
// //STRIKE
//
// $('#plus_15').click(function() {
//   roll_15.up();
//   $('#15').text(roll_15.getCurrentPins());
//   $('.total').text(total());
//   rollCalculator();
// });
//
// //minus
//
// $('#minus_15').click(function() {
//   roll_15.down();
//  $('#15').text(roll_15.getCurrentPins());
//   $('.total').text(total());
// });
//
// //SPARE
//
// $('#plus_16').click(function() {
//   let limit = 10 - roll_15.pins;
//   if (roll_16.getCurrentPins() < limit) {
//   roll_16.up();
//   $('#16').text(roll_16.pins);
//   $('.total').text(total());
//   rollCalculator();
// }
//   if(roll_15.pins + roll_16.pins == roll.strike) {
//     $('#16').text("/");
//   }
// });
//
// //minus
//
// $('#minus_16').click(function() {
//   roll_16.down();
//  $('#16').text(roll_16.getCurrentPins());
//  $('.total').text(total());
// });
//
// //STRIKE
//
// $('#plus_17').click(function() {
//   roll_17.up();
//   $('#17').text(roll_17.getCurrentPins());
//   $('.total').text(total());
//   rollCalculator();
// });
//
// //minus
// $('#minus_17').click(function() {
//   roll_17.down();
//  $('#17').text(roll_17.getCurrentPins());
//  $('.total').text(total());
// });
//
// //SPARE
//
// $('#plus_18').click(function() {
//   let limit = 10 - roll_17.pins;
//   if (roll_18.pins < limit) {
//   roll_18.up();
//   $('#18').text(roll_18.getCurrentPins());
//   rollCalculator();
// }
//   if(roll_17.pins + roll_18.pins == roll.strike) {
//     $('#18').text("/");
//   }
// });
//
// //minus
//
// $('#minus_18').click(function() {
//   roll_18.down();
//   $('.total').text(total());
//  $('#18').text(roll_18.getCurrentPins());
// });
//
// //STRIKE
//
// $('#plus_19').click(function() {
//   roll_19.up();
//   $('.total').text(total());
//   $('#19').text(roll_19.getCurrentPins());
//   rollCalculator();
// });
//
// //minus
//
// $('#minus_19').click(function() {
//   roll_19.down();
//   $('.total').text(total());
//  $('#19').text(roll_19.getCurrentPins());
// });
//
// //SPARE
//
// $('#plus_20').click(function() {
//   let limit = 10 - roll_19.pins;
//   if (roll_20.pins < limit) {
//   roll_20.up();
//   $('#20').text(roll_20.pins);
//   rollCalculator();
// }
//   if(roll_19.pins + roll_20.pins == roll.strike) {
//     $('#20').text("/");
//   }
// });

//minus

$('#minus_20').click(function(){
  roll_20.down();
  $('.total').text(total());
 $('#20').text(roll_20.pins);
});


function total(){
  // result = []
  // result.push(roll_1.pins)
  // var sum = result.reduce(function(a, b){
  // return a + b;
  // }, 0);
  // return sum;
  // console.log(sum);
  return (roll_1.pins + roll_2.pins + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins
    + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
    + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
}

function countStrike(roll_1, roll_2, roll_3){
  if (roll_1.pins === roll.strike) {
    $('.total').text(roll_1.rollScore(roll_1, roll_2, roll_3));
  }
}

function spare(roll_1, roll_2){
  if(roll_1.pins + roll_2.pins == roll.strike){
    return ("/");
    // $('#spare').fadeIn(2000);
    // $('#spare').fadeOut(2000);
  }
}

function newRollTotal(roll_1, roll_2, roll_3){
  return (roll_1.pins + roll_2.pins + roll_3.pins);
}

//
// function rollCalculator(){
//
//   if (roll_1.pins === roll.strike) {
//     $('#1').text(roll_1.pins + (roll_3.pins + roll_4.pins));
//     $('.total').text(total() + roll_3.pins + roll_4.pins);
//     $('#2').text(" X ");
//
//     if (roll_3.pins === roll.strike){
//       $('#3').text(roll_3.pins + (roll_5.pins + roll_6.pins));
//       $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins);
//       $('#4').text(" X ");
//     }
//
//       if (roll_5.pins === roll.strike){
//         $('#5').text(roll_5.pins + (roll_7.pins + roll_8.pins));
//         $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins);
//         $('#6').text(" X ");
//       }
//
//         if (roll_7.pins === roll.strike){
//           $('#7').text(roll_7.pins + (roll_9.pins + roll_10.pins));
//           $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins + roll_9.pins + roll_10.pins);
//           $('#8').text(" X ");
//         }
//
//           if (roll_9.pins === roll.strike){
//             $('#9').text(roll_9.pins + (roll_11.pins + roll_12.pins));
//             $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins);
//             $('#10').text(" X ");
//           }
//
//             if (roll_11.pins === roll.strike){
//               $('#11').text(roll_11.pins + (roll_13.pins + roll_14.pins));
//               $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins);
//               $('#12').text("X");
//             }
//
//               if(roll_13.pins === roll_13.strike){
//                 $('#13').text(roll_13.pins + (roll_15.pins + roll_16.pins));
//                 $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//                  + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins + roll_15.pins + roll_16.pins);
//                 $('#14').text("X");
//               }
//
//                 if(roll_15.pins === roll_15.strike){
//                   $('#15').text(roll_15.pins + (roll_17.pins + roll_18.pins));
//                   $('.total').text(total() + total() - (roll_19.pins + roll_20.pins));
//                   $('#16').text("X");
//                 }
//
//                   if(roll_17.pins === roll_17.strike){
//                     $('#17').text(roll_17.pins + (roll_19.pins + roll_20.pins));
//                     $('.total').text(total() + total());
//                     $('#18').text("X");
//                   }
//
//                     if(roll_19.pins === roll_19.strike){
//                       $('.total').text(total() + total() + roll.strike);
//                       $('#20').text(" X ");
//                     }
//
//
//   } else if (roll_1.pins != roll.strike)  {
//     $('.total').text(total());
//
//   } else if (roll_3.pins === roll.strike){
//       $('#3').text(roll_3.pins + (roll_5.pins + roll_6.pins));
//       $('.total').text(roll_5.pins + roll_6.pins + total());
//       $('#4').text(" X ");
//
//       if (roll_5.pins === roll.strike){
//         $('#5').text(roll_5.pins + (roll_7.pins + roll_8.pins));
//         $('.total').text(total() + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins);
//         $('#6').text(" X ");
//       }
//
//         if (roll_7.pins === roll.strike){
//           $('#7').text(roll_7.pins + (roll_9.pins + roll_10.pins));
//           $('.total').text(total() + roll_9.pins + roll_10.pins);
//           $('#8').text(" X ");
//         }
//
//           if (roll_9.pins === roll.strike){
//             $('#9').text(roll_9.pins + (roll_11.pins + roll_13.pins));
//             $('.total').text(total() + roll_11.pins + roll_13.pins);
//           }
//
//             if (roll_11.pins === roll.strike){
//               $('#11').text(roll_11.pins + (roll_13.pins + roll_14.pins));
//               $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins);
//               $('#12').text(" X ");
//             }
//
//               if(roll_13.pins === roll_13.strike){
//                 $('#13').text(roll_13.pins + (roll_15.pins + roll_16.pins));
//                 $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//                  + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins + roll_15.pins + roll_16.pins);
//                 $('#14').text(" X ");
//               }
//
//                 if(roll_15.pins === roll_15.strike){
//                   $('#15').text(roll_15.pins + (roll_17.pins + roll_18.pins));
//                   $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//                    + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//                    + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins);
//                   $('#16').text(" X ");
//                 }
//
//
//                   if(roll_17.pins === roll_17.strike){
//                     $('#17').text(roll_17.pins + (roll_19.pins + roll_20.pins));
//                     $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//                      + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//                      + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
//                     $('#18').text("X");
//                   }
//
//                     if(roll_19.pins === roll_19.strike){
//                       $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//                        + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//                        + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins + roll.strike);
//                       $('#20').text(" X ");
//                     }
//
//   } else if (roll_3.pins != roll.strike) {
//      $('.total').text(total());
//
//   } else if (roll_5.pins === roll.strike){
//       $('#5').text(roll_5.pins + roll_7.pins + roll_8.pins);
//       $('.total').text(roll_7.pins + roll_8.pins + total());
//
//       $('#plus_6').fadeOut(2000);
//       $('#minus_6').fadeOut(2000);
//       $('#6').text("X");
//
//       if (roll_7.pins === roll.strike){
//         $('#7').text(roll_7.pins + (roll_9.pins + roll_10.pins));
//         $('.total').text(total() + roll_9.pins + roll_10.pins);
//         $('#8').text(" X ");
//       }
//
//         if (roll_9.pins === roll.strike){
//           $('#9').text(roll_9.pins + (roll_11.pins + roll_13.pins));
//           $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins
//            + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins);
//         }
//
//           if (roll_11.pins === roll.strike){
//             $('#11').text(roll_11.pins + (roll_13.pins + roll_14.pins));
//             $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins
//              + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins);
//             $('#12').text(" X ");
//           }
//
//             if(roll_13.pins === roll_13.strike){
//               $('#13').text(roll_13.pins + (roll_15.pins + roll_16.pins));
//               $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//                + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins + roll_15.pins + roll_16.pins);
//               $('#14').text("X");
//             }
//
//               if(roll_15.pins === roll_15.strike){
//                 $('#15').text(roll_15.pins + (roll_17.pins + roll_18.pins));
//                 $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//                  + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//                  + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins);
//                 $('#16').text("X");
//               }
//
//                 if(roll_17.pins === roll_17.strike){
//                   $('#17').text(roll_17.pins + (roll_19.pins + roll_20.pins));
//                   $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//                    + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//                    + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
//                   $('#18').text("X");
//                 }
//
//                   if(roll_19.pins === roll_19.strike){
//                     $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//                      + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//                      + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins + roll.strike);
//                     $('#20').text(" X ");
//                   }
//
// } else if (roll_5.pins != roll.strike)  {
//     $('.total').text(total());
//
//   } else if (roll_7.pins === roll.strike){
//
//     if (roll_9.pins === roll.strike){
//         $('#9').text(roll_9.pins + (roll_11.pins + roll_13.pins));
//         $('.total').text(total() + roll_11.pins + roll_13.pins);
//         $('#10').text(" X ");
//      }
//
//       if (roll_11.pins === roll.strike){
//         $('#11').text(roll_11.pins + (roll_13.pins + roll_14.pins));
//         $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins);
//         $('#12').text(" X ");
//       }
//
//         if(roll_13.pins === roll_13.strike){
//           $('#13').text(roll_13.pins + (roll_15.pins + roll_16.pins));
//           $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//            + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins + roll_15.pins + roll_16.pins);
//           $('#14').text("X");
//         }
//
//           if(roll_15.pins === roll_15.strike){
//             $('#15').text(roll_15.pins + (roll_17.pins + roll_18.pins));
//             $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//              + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//              + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins);
//             $('#16').text("X");
//           }
//
//             if(roll_17.pins === roll_17.strike){
//               $('#17').text(roll_17.pins + (roll_19.pins + roll_20.pins));
//               $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//                + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//                + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
//               $('#18').text("X");
//             }
//
//               if(roll_19.pins === roll_19.strike){
//                 $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//                  + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//                  + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins + roll.strike);
//                 $('#20').text(" X ");
//               }
//
// } else if (roll_7.pins != roll.strike)  {
//     $('.total').text(total());
//
//   } else if  (roll_9.pins === roll.strike){
//       $('#9').text(roll_9.pins + (roll_11.pins + roll_13.pins));
//       $('.total').text(total() + roll_11.pins + roll_13.pins);
//       $('#10').text(" X ");
//
//       if (roll_11.pins === roll.strike){
//         $('#11').text(roll_11.pins + (roll_13.pins + roll_14.pins));
//         $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins);
//         $('#12').text(" X ");
//       }
//
//         if(roll_13.pins === roll_13.strike){
//           $('#13').text(roll_13.pins + (roll_15.pins + roll_16.pins));
//           $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//            + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins + roll_15.pins + roll_16.pins);
//           $('#14').text("X");
//         }
//
//           if(roll_15.pins === roll_15.strike){
//             $('#15').text(roll_15.pins + (roll_17.pins + roll_18.pins));
//             $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//              + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//              + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins);
//             $('#16').text("X");
//           }
//
//             if(roll_17.pins === roll_17.strike){
//               $('#17').text(roll_17.pins + (roll_19.pins + roll_20.pins));
//               $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//                + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//                + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
//               $('#18').text("X");
//             }
//
//               if(roll_19.pins === roll_19.strike){
//                 $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//                  + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//                  + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins + roll.strike);
//                 $('#20').text(" X ");
//               }
// } else if (roll_9.pins != roll.strike)  {
//     $('.total').text(total());
//
//   } else if (roll_11.pins === roll.strike){
//     $('#11').text(roll_11.pins + (roll_13.pins + roll_14.pins));
//     $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins);
//     $('#12').text(" X ");
//
//
//     if(roll_13.pins === roll_13.strike){
//       $('#13').text(roll_13.pins + (roll_15.pins + roll_16.pins));
//       $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//        + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins + roll_15.pins + roll_16.pins);
//       $('#14').text("X");
//     }
//
//       if(roll_15.pins === roll_15.strike){
//         $('#15').text(roll_15.pins + (roll_17.pins + roll_18.pins));
//         $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//          + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//          + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins);
//         $('#16').text("X");
//       }
//
//         if(roll_17.pins === roll_17.strike){
//           $('#17').text(roll_17.pins + (roll_19.pins + roll_20.pins));
//           $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//            + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//            + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
//           $('#18').text("X");
//         }
//
//           if(roll_19.pins === roll_19.strike){
//             $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//              + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//              + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins + roll.strike);
//             $('#20').text(" X ");
//           }
//
// } else if (roll_11.pins != roll.strike)  {
//     $('.total').text(total());
//
// } else if (roll_13.pins === roll_13.strike){
//    $('#13').text(roll_13.pins + (roll_15.pins + roll_16.pins));
//    $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//     + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins + roll_15.pins + roll_16.pins);
//    $('#14').text("X");
//
//      if(roll_15.pins === roll_15.strike){
//        $('#15').text(roll_15.pins + (roll_17.pins + roll_18.pins));
//        $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//         + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//         + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins);
//        $('#16').text("X");
//      }
//
//        if(roll_17.pins === roll_17.strike){
//          $('#17').text(roll_17.pins + (roll_19.pins + roll_20.pins));
//          $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//           + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//           + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
//         $('#18').text("X");
//         }
//
//          if(roll_19.pins === roll_19.strike){
//            $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//             + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//             + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins + roll.strike);
//            $('#20').text(" X ");
//           }
//
//  } else if (roll_13.pins != roll.strike)  {
//      $('.total').text(total());
//
//      if(roll_15.pins === roll_15.strike){
//        $('#15').text(roll_15.pins + (roll_17.pins + roll_18.pins));
//        $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//         + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//         + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins);
//        $('#16').text("X");
//      }
//
//        if(roll_17.pins === roll_17.strike){
//          $('#17').text(roll_17.pins + (roll_19.pins + roll_20.pins));
//          $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//           + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//           + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
//          $('#18').text("X");
//        }
//
//          if(roll_19.pins === roll_19.strike){
//            $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//             + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//             + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins + roll.strike);
//            $('#20').text(" X ");
//          }
//
//  } else if (roll_15.pins != roll.strike)  {
//      $('.total').text(total());
//
//    if(roll_17.pins === roll_17.strike){
//      $('#17').text(roll_17.pins + (roll_19.pins + roll_20.pins));
//      $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//       + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//       + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins);
//    $('#18').text("X");
//    }
//
//      if(roll_19.pins === roll_19.strike){
//        $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//         + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//         + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins + roll.strike);
//        $('#20').text(" X ");
//       }
//
// } else if (roll_17.pins != roll.strike){
//    $('.total').text(total());
//
//   } else if (roll_19.pins === roll_19.strike){
//      $('.total').text(total() + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins + roll_8.pins
//       + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
//       + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins + roll_20.pins + roll.strike);
//      $('#20').text(" X ");
//  } else {
//    $('.total').text(total());
//  }
// }

function reset(){
  $('.operators').show();
  $('#strike').hide();
  $('#spare').hide();
  $("#1").text(roll_1.reset());
  $("#2").text(roll_2.reset());
  $("#3").text(roll_3.reset());
  $("#4").text(roll_4.reset());
  $("#5").text(roll_5.reset());
  $("#6").text(roll_6.reset());
  $("#7").text(roll_7.reset());
  $("#8").text(roll_8.reset());
  $("#9").text(roll_9.reset());
  $("#10").text(roll_10.reset());
  $("#11").text(roll_11.reset());
  $("#12").text(roll_12.reset());
  $("#13").text(roll_13.reset());
  $("#14").text(roll_14.reset());
  $("#15").text(roll_15.reset());
  $("#16").text(roll_16.reset());
  $("#17").text(roll_17.reset());
  $("#18").text(roll_18.reset());
  $("#19").text(roll_19.reset());
  $("#20").text(roll_20.reset());
  $('.total').text(roll.DEFAULT_PINS)
}

  // function spareEffect(){
  //   alert('Spare!');
  // }
});
