$(document).ready(function(){

  function displayAll() {
    $('#total_score').text(bowling.total_score());
    $('#frame_number').text(bowling.frame_number());
    $('#roll_number').text(bowling.roll_number());
    $('#frame_score').text(bowling.frame_score());
  }

  var bowling = new Bowling();
  $('#frame_number').text(bowling.frame_number());
  $('#roll_number').text(bowling.roll_number());
  $('#frame_score').text(bowling.frame_score());


  $('#zero').click(function(){
    bowling.roll(0)
    displayAll();
  });

  $('#one').click(function(){
    bowling.roll(1)
    displayAll();

  });
  $('#two').click(function(){
    bowling.roll(2)
    displayAll();
  });

  $('#three').click(function(){
    bowling.roll(3)
    displayAll();
  });

  $('#four').click(function(){
    bowling.roll(4)
    displayAll();
  });

  $('#five').click(function(){
    bowling.roll(5)
    displayAll();
  });

  $('#six').click(function(){
    bowling.roll(6)
    displayAll();
  });

  $('#seven').click(function(){
    bowling.roll(7)
    displayAll();
  });

  $('#eight').click(function(){
    bowling.roll(8)
    displayAll();
  });

  $('#nine').click(function(){
    bowling.roll(9)
    displayAll();
  });

  $('#ten').click(function(){
    bowling.roll(10)
  displayAll();
  });
});
