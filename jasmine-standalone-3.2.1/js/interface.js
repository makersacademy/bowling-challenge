$(document).ready(function(){
  var bowling = new Bowling();

  $('#frame_number').text(bowling.frame_number());
  $('#roll_number').text(bowling.roll_number());


  $('text_value').click(function(){
    var text_value = $("#pins").val();
    bowling.roll(text_value);
    console.log(total_score());

    $('#total_score').text(bowling.total_score());
    $('#frame_number').text(bowling.frame_number());
    $('#roll_number').text(bowling.roll_number());
  });
});
