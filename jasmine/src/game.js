"use strict"

$(document).ready(function() {
var frame = 1
var rolls = [];
$('#frame').text(frame);
$('#submit').on('click', function(){
  var rollz1 = $("#roll-1").val();
  var rollz2 = $("#roll-2").val();
  var roll1 = Number(rollz1);
  var roll2 = Number(rollz2);
  rolls.push([roll1, roll2]);

  console.log(rolls);

  $('#score').text(score(rolls, frame));
  frame ++
  $('#frame').text(frame);
  });
});



function score(rolls, frame) {
  var tempscore = 0;
  var i = 0;
  for (i = 0; i < frame; i ++) {
    if (rolls[i][0] === 10) {
      tempscore += (rolls[i][0] + rolls[i][1] + rolls[i+1][0] + rolls[i+1][1]);
    }
    else if (rolls[i][1] === 10 || (rolls[i][0]+rolls[i][1]) === 10) {
      tempscore += (rolls[i][0] + rolls[i][1]+ rolls[i+1][0]);
    } else {
  tempscore += (rolls[i][0] + rolls[i][1]);
  console.log(tempscore);
};
};
  return tempscore;
};
