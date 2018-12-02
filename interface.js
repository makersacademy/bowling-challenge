var game = new Bowling();
var button = new Buttons();
var roll = 1;

$(document).ready(function() {
  $('#gamefinished').hide();
  $('#numbers').hide();
  $('#numbers').show(800);
  $('#button1').click(function() {
  game.alertIfFramesFinished();
  game.returnPinNumber(1);
  pickedNumberToFrame(1);
  button.statusButtons(1);

});

  $('#button2').click(function() {
  game.alertIfFramesFinished();
  game.returnPinNumber(2);
  pickedNumberToFrame(2);
  button.statusButtons(2);
});

  $('#button3').click(function() {
  game.alertIfFramesFinished();
  game.returnPinNumber(3);
  pickedNumberToFrame(3);
  button.statusButtons(3);
});

  $('#button4').click(function() {
  game.alertIfFramesFinished();
  game.returnPinNumber(4);
  pickedNumberToFrame(4);
  button.statusButtons(4);
});

  $('#button5').click(function() {
  game.alertIfFramesFinished();
  game.returnPinNumber(5);
  pickedNumberToFrame(5);
  button.statusButtons(5);
});

  $('#button6').click(function() {
  game.alertIfFramesFinished();
  game.returnPinNumber(6);
  pickedNumberToFrame(6);
  button.statusButtons(6);
});

  $('#button7').click(function() {
  game.alertIfFramesFinished();
  game.returnPinNumber(7);
  pickedNumberToFrame(7);
  button.statusButtons(7);
});

  $('#button8').click(function() {
  game.alertIfFramesFinished();
  game.returnPinNumber(8);
  pickedNumberToFrame(8);
  button.statusButtons(8);
});

  $('#button9').click(function() {
  game.alertIfFramesFinished();
  game.returnPinNumber(9);
  pickedNumberToFrame(9);
  button.statusButtons(9);
});

  $('#button10').click(function() {
  game.alertIfFramesFinished();
  game.returnPinNumber(10);
  pickedNumberToFrame(10);
});

$('#gamefinished').click(function() {
    window.location.reload();
});

function pickedNumberToFrame(number){
  if(number === 10) {  //if rolled number is Strike then print "-" and push 0 to array score will looks like : X, -
    $('#roll'+roll+'').text(number);
    roll = roll + 1
    $('#roll'+roll+'').text("-");
    roll = roll + 1
  }else if(roll === 21) {
    $('#roll21').text("-");
  }else if(number != 10) {
    $('#roll'+roll+'').text(number);
    roll = roll + 1
  };
};

});
