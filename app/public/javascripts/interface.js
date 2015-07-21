var bowling = new Bowling();

var updateDisplay = function () {
  $('#score').html(bowling.score);
};

$("#0").click(function(){
  bowling.roll(0);
  updateDisplay();
});

$("#1").click(function(){
  bowling.roll(1);
  updateDisplay();
});

$("#2").click(function(){
  bowling.roll(2);
  updateDisplay();
});

$("#3").click(function(){
  bowling.roll(3);
  updateDisplay();
});

$("#4").click(function(){
  bowling.roll(4);
  updateDisplay();
});

$("#5").click(function(){
  bowling.roll(5);
  updateDisplay();
});

$("#6").click(function(){
  bowling.roll(6);
  updateDisplay();
});

$("#7").click(function(){
  bowling.roll(7);
  updateDisplay();
});

$("#8").click(function(){
  bowling.roll(8);
  updateDisplay();
});

$("#9").click(function(){
  bowling.roll(9);
  updateDisplay();
});
