'use script';

$(document).ready(function() {
  var bowling = new Bowling();
  var rollIndex = 1;

  function updateScoreboard() {
    if (lastRoll() === 10 && (rollIndex % 2 != 0)){
      strike();
    } else if (rollIndex % 2 === 0 && isASpare()){
      spare();
    } else {
      $('#rollIndex-' + rollIndex).text(lastRoll());
      rollIndex += 1;
    }
  }

  function strike() {
    $('#rollIndex-' + rollIndex).text(lastRoll());
    $('#rollIndex-' + (rollIndex+1)).text("-");
    rollIndex += 2;
  }

  function spare() {
    $('#rollIndex-' + rollIndex).text("/")
    rollIndex += 1;
  }

  function lastRoll() {
    return bowling.rollHistory[bowling.rollHistory.length-1]
  }

  function nextLastRoll() {
    return bowling.rollHistory[bowling.rollHistory.length-2]
  }

  function isASpare(){
    if ((lastRoll() + nextLastRoll()) === 10){
      return true;
    } else {
      return false;
    }
  }

  $('#roll-0').click(function(){
    bowling.roll(0);
    updateScoreboard();
  });

  $('#roll-1').click(function(){
    bowling.roll(1);
    updateScoreboard();
  });

  $('#roll-2').click(function(){
    bowling.roll(2);
    updateScoreboard();
  });

  $('#roll-3').click(function(){
    bowling.roll(3);
    updateScoreboard();
  });

  $('#roll-4').click(function(){
    bowling.roll(4);
    updateScoreboard();
  });

  $('#roll-5').click(function(){
    bowling.roll(5);
    updateScoreboard();
  });

  $('#roll-6').click(function(){
    bowling.roll(6);
    updateScoreboard();
  });

  $('#roll-7').click(function(){
    bowling.roll(7);
    updateScoreboard();
  });

  $('#roll-8').click(function(){
    bowling.roll(8);
    updateScoreboard();
  });

  $('#roll-9').click(function(){
    bowling.roll(9);
    updateScoreboard();
  });

  $('#roll-10').click(function(){
    bowling.roll(10);
    updateScoreboard();
  });
})
