'use script';

$(document).ready(function() {
  var bowling = new Bowling();
  var rollIndex = 0;

  function updateScoreboard() {
    
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
