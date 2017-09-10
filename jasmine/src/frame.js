"use strict"


var rolls = [
  [1, 2],
  [3, 2],
  [5, 2],
  [7, 1],
  [8, 0],
  [3, 3],
  [4, 2],
  [3, 7],
  [10, 0],
  [10, 0],
  [5, 0]
];


function score(rolls, frame) {
  var temp = 0;
  var i = 0;
  for (i = 0; i < frame; i++) {

    if (rolls[i][0] === 10) {
    temp += (rolls[i][0] + rolls[i+1][0] + rolls[i+1][1]);
    console.log(temp);
  }
  else if (rolls[i][1] === 10 || (rolls[i][0]+rolls[i][1]) === 10) {
    temp += (rolls[i][0] + rolls[i][1] + rolls[i+1][0]);
    console.log(temp);
  } else {
    temp += (rolls[i][0] + rolls[i][1]);
    console.log(temp);
  };

};
  return temp
};

$(document).ready(function() {
var frame = 3
$('#score').text(score(rolls, frame));
$('#frame').text(frame);
$('#submit').on('click', function(){
  var roll1 = $("#roll-1").val();
  var roll2 = $("#roll-2").val();
  var rollz = [roll1, roll2]
  alert(rollz);
});
});
