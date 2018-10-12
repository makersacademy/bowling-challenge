$(document).ready(function(){
  var bowling = new Bowling();

  $('#frame_number').text(bowling.frame_number());
  $('#roll_number').text(bowling.roll_number());

  $('#zero').click(function(){
    bowling.roll(0)
    console.log(bowling.total_score());
    $('#total_score').text(bowling.total_score());
    $('#frame_number').text(bowling.frame_number());
    $('#roll_number').text(bowling.roll_number());
  });

  $('#one').click(function(){
    bowling.roll(1)
    console.log(bowling.total_score());
    $('#total_score').text(bowling.total_score());
    $('#frame_number').text(bowling.frame_number());
    $('#roll_number').text(bowling.roll_number());
  });
  $('#two').click(function(){
    bowling.roll(2)
    console.log(bowling.total_score());
    $('#total_score').text(bowling.total_score());
    $('#frame_number').text(bowling.frame_number());
    $('#roll_number').text(bowling.roll_number());
  });

  $('#three').click(function(){
    bowling.roll(3)
    console.log(bowling.total_score());
    $('#total_score').text(bowling.total_score());
    $('#frame_number').text(bowling.frame_number());
    $('#roll_number').text(bowling.roll_number());
  });

  $('#four').click(function(){
    bowling.roll(4)
    console.log(bowling.total_score());
    $('#total_score').text(bowling.total_score());
    $('#frame_number').text(bowling.frame_number());
    $('#roll_number').text(bowling.roll_number());
  });

  $('#five').click(function(){
    bowling.roll(5)
    console.log(bowling.total_score());
    $('#total_score').text(bowling.total_score());
    $('#frame_number').text(bowling.frame_number());
    $('#roll_number').text(bowling.roll_number());
  });

  $('#six').click(function(){
    bowling.roll(6)
    console.log(bowling.total_score());
    $('#total_score').text(bowling.total_score());
    $('#frame_number').text(bowling.frame_number());
    $('#roll_number').text(bowling.roll_number());
  });

  $('#seven').click(function(){
    bowling.roll(7)
    console.log(bowling.total_score());
    $('#total_score').text(bowling.total_score());
    $('#frame_number').text(bowling.frame_number());
    $('#roll_number').text(bowling.roll_number());
  });

  $('#eight').click(function(){
    bowling.roll(8)
    console.log(bowling.total_score());
    $('#total_score').text(bowling.total_score());
    $('#frame_number').text(bowling.frame_number());
    $('#roll_number').text(bowling.roll_number());
  });

  $('#nine').click(function(){
    bowling.roll(9)
    console.log(bowling.total_score());
    $('#total_score').text(bowling.total_score());
    $('#frame_number').text(bowling.frame_number());
    $('#roll_number').text(bowling.roll_number());
  });

  $('#ten').click(function(){
    bowling.roll(10)
    console.log(bowling.total_score());
    $('#total_score').text(bowling.total_score());
    $('#frame_number').text(bowling.frame_number());
    $('#roll_number').text(bowling.roll_number());
  });
});
