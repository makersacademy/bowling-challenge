
$(document).ready(function(){
var roll_1 = new BowlingCalculator;
var roll_2 = new BowlingCalculator;
var roll_3 = new BowlingCalculator;
var roll_4 = new BowlingCalculator;
var roll_5 = new BowlingCalculator;
var roll_6 = new BowlingCalculator;
var roll_7 = new BowlingCalculator;
var roll_8 = new BowlingCalculator;
var roll_9 = new BowlingCalculator;
var roll_10 = new BowlingCalculator;
var roll_11= new BowlingCalculator;
var roll_12 = new BowlingCalculator;
var roll_13 = new BowlingCalculator;
var roll_14 = new BowlingCalculator;
var roll_15 = new BowlingCalculator;
var roll_16= new BowlingCalculator;
var roll_17 = new BowlingCalculator;
var roll_18 = new BowlingCalculator;
var roll_19 = new BowlingCalculator;
var roll_20 = new BowlingCalculator;


$('#strike').hide();
$('#spare').hide();
$('#reset').click(function(){
  $(".number").text(roll_1.DEFAULT_PINS);
  $(".total").text((roll_1.DEFAULT_PINS));
});

//STRIKE

$('#plus_1').click(function() {
roll_1.up();
$('#1').text(roll_1.pins);
$('.total').text(total());
  if(roll_1.pins === roll_1.strike){
  strike();
  $('#2').text(":)");
  }
});

//Minus

$('#minus_1').click(function() {
  roll_1.down();
 $('#1').text(roll_1.pins);
 $('.total').text(total());
});

  //SPARE

$('#plus_2').click(function(){
  let limit = 10 - roll_1.pins;
  if (roll_2.pins < limit) {
  roll_2.up()
  $('#2').text(roll_2.pins);
}
  $('.total').text(total());
  if(roll_1.pins + roll_2.pins == roll_1.strike) {
  spare();
  }
});

//minus

$('#minus_2').click(function() {
  roll_2.down();
 $('#2').text(roll_2.getCurrentPins());
 $('.total').text(total());
});

//STRIKE

$('#plus_3').click(function() {
  roll_3.up();
  $('#3').text(roll_3.pins);
  $('.total').text(total());
  if(roll_3.pins === roll_3.strike){
   strike();
   $('#4').text(":)");
  }
});

//minus

$('#minus_3').click(function() {
  roll_3.down();
 $('#3').text(roll_3.getCurrentPins());
 $('.total').text(total());
});

//SPARE

$('#plus_4').click(function() {
  let limit = 10 - roll_3.getCurrentPins();
  if (roll_4.pins < limit) {
  roll_4.up();
  }
  $('#4').text(roll_4.pins);
  if(roll_3.pins + roll_4.pins == roll_1.strike) {
  spare();
  }
  $('.total').text(total());
});

//minus

$('#minus_4').click(function() {
  roll_4.down();
 $('#4').text(roll_4.getCurrentPins());
 $('.total').text(total());
});

//STRIKE

$('#plus_5').click(function() {
  roll_5.up();
  $('#5').text(roll_5.pins);
  $('.total').text(total());
  if(roll_5.pins === roll_5.strike){
    strike();
    $('#6').text(":)");
  }
});

//minus

$('#minus_5').click(function() {
  roll_5.down();
 $('#5').text(roll_5.getCurrentPins());
 $('.total').text(total());
});

//SPARE

$('#plus_6').click(function() {
  let limit = 10 - roll_5.getCurrentPins();
  if (roll_6.getCurrentPins() < limit) {
  roll_6.up();
}
  $('#6').text(roll_6.getCurrentPins());
  $('.total').text(total());
  if(roll_5.pins + roll_6.pins == roll_1.strike) {
  spare();
  }
});

//minus

$('#minus_6').click(function() {
  roll_6.down();
 $('#6').text(roll_6.getCurrentPins());
 $('.total').text(total());
});

//STRIKE

$('#plus_7').click(function() {
  roll_7.up();
  $('#7').text(roll_7.getCurrentPins());
$('.total').text(total());
  if(roll_7.pins === roll_7.strike){
    strike();
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
  if(roll_9.pins === roll_9.strike){
    strike();
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
    strike();
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
    strike();
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
    strike();
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
    strike();
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
  strike();
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
  $('#20').text(roll_20.getCurrentPins());
  if(roll_19.pins + roll_20.pins == roll_1.strike) {
  spare();
  }
});

//minus

$('#minus_20').click(function() {
  roll_20.down();
  $('.total').text(total());
 $('#20').text(roll_20.getCurrentPins());
});

function total(){
  return (roll_1.pins + roll_2.pins + roll_3.pins + roll_4.pins + roll_5.pins + roll_6.pins + roll_7.pins
  + roll_8.pins + roll_9.pins + roll_10.pins + roll_11.pins + roll_12.pins + roll_13.pins + roll_14.pins
  + roll_15.pins + roll_16.pins + roll_17.pins + roll_18.pins + roll_19.pins
  + roll_20.pins);
};

function strike(){
  $('#strike').fadeIn(2000);
  $('#strike').fadeOut(2000);
}

function spare(){
    $("#spare").fadeIn(2000);
    $("#spare").fadeOut(2000);
 }
});
