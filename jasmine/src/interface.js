window.onload = function() {

};

$(document).ready( function() {
  var bowling = new Bowling ();
  var afteroll = function(){
    for (var i = 1; i <= 21; i ++){
      $('.roll' + i).text(bowling.roll());
    };
  };

  $('.pin1').click( function (){
    var roll_button1 = $(this).val();
    console.log(roll_button1);
    bowling.roll(roll_button1);
    afteroll();

    $('.roll1').text(roll_button1);

  })

  $('.pin2').click( function (){
    var roll_button2 = $(this).val();
    console.log(roll_button2);
    bowling.roll(roll_button2);
    afteroll();
    console.log(bowling.rolls);

    $('.roll2').text(roll_button2);
  })



})
