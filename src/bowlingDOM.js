$( document ).ready(function(){
  var bowling = new Bowling();

  $('#1PinDown').click(function( event ){
    bowling.pinsDown(1);
    updateScore();
  })
  $('#2PinsDown').click(function( event ){
    bowling.pinsDown(2);
    updateScore();
  })
  $('#3PinsDown').click(function( event ){
    bowling.pinsDown(3);
    updateScore();
  })
  $('#4PinsDown').click(function( event ){
    bowling.pinsDown(4);
    updateScore();
  })
  $('#5PinsDown').click(function( event ){
    bowling.pinsDown(5);
    updateScore();
  })
  $('#6PinsDown').click(function( event ){
    bowling.pinsDown(6);
    updateScore();
  })
  $('#7PinsDown').click(function( event ){
    bowling.pinsDown(7);
    updateScore();
  })
  $('#8PinsDown').click(function( event ){
    bowling.pinsDown(8);
    updateScore();
  })
  $('#9PinsDown').click(function( event ){
    bowling.pinsDown(9);
    updateScore();
  })
  $('#10PinsDown').click(function( event ){
    bowling.pinsDown(10);
    updateScore();
  })

  $('#newGame').click(function ( event ){
    bowling.reset();
  })

  function updateScore(){
    $('#score').text(bowling.score());
    $('#score').attr('class',bowling.score());
  }
})