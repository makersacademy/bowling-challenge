$( document ).ready(function(){
  var bowling = new Bowling();

  $('#0PinDown').click(function( event ){
    bowling.pinsDown(0);
    update();
    })
  $('#1PinDown').click(function( event ){
    bowling.pinsDown(1);
    update();
    })
  $('#2PinsDown').click(function( event ){
    bowling.pinsDown(2);
    update();
    })
  $('#3PinsDown').click(function( event ){
    bowling.pinsDown(3);
    update();
    })
  $('#4PinsDown').click(function( event ){
    bowling.pinsDown(4);
    update();
    })
  $('#5PinsDown').click(function( event ){
    bowling.pinsDown(5);
    update();
    })
  $('#6PinsDown').click(function( event ){
    bowling.pinsDown(6);
    update();
    })
  $('#7PinsDown').click(function( event ){
    bowling.pinsDown(7);
    update();
    })
  $('#8PinsDown').click(function( event ){
    bowling.pinsDown(8);
    update();
    })
  $('#9PinsDown').click(function( event ){
    bowling.pinsDown(9);
    update();
    })
  $('#10PinsDown').click(function( event ){
    bowling.pinsDown(10);
    update();
    })

  $('#newGame').click(function ( event ){
    bowling.reset();
    update();
    })

  function update(){
    $('#pinsDown').text(bowling._rolls);
    $('#score').text(bowling.calculateScore());
    $('#score').attr('class',bowling.calculateScore());
  }
})