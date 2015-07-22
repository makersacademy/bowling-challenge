var bowling = new Bowling();

var updateDisplay = function () {
  $('#score').html(bowling.score);
  var num = checkTable();
  $('#box' + num).html(bowling.lastRoll);
  if (bowling.lastRoll === 10) {
    $('#box' + (num+1)).html('-');
  }
};

var checkTable = function () {
  var table = [$('#box1'), $('#box2'), $('#box3'), $('#box4'),
               $('#box5'), $('#box6'), $('#box7'), $('#box8'),
               $('#box9'), $('#box10'), $('#box11'), $('#box12'),
               $('#box13'), $('#box14'), $('#box15'), $('#box16'),
               $('#box17'), $('#box18'), $('#box19'), $('#box20'),
               $('#box21')];
 for (i = 0; i < table.length; i++) {
   if (table[i].html() === '') {
     return i+1;
   }
 }
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

$("#10").click(function(){
  bowling.roll(10);
  updateDisplay();
});
