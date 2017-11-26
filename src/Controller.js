$(document).ready(function(){
  bowling = new BowlingScore();
  $("#pins-btn").click(function(){

     var pins = parseInt($('#pins').val());

     update(pins)
  })

  function update(pins){

    bowling.roll(pins);
    bowling.calculateScore();


    $('#scores').html(bowling.scores());

    $('#score').html(bowling.score());

    $('#frames').html(bowling.rolls());

    $('#frame').html(bowling.currentFrame());
  }
})
