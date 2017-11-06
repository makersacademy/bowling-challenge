var game = new Game();
var rollIndex = 0;
var is_second_roll = false;
var firstRollScore = 0;

$(document).ready(function(){
  generate_buttons(0)

});

function roll(score) {
  game.roll(score);
  if(isStrike(score)){
    updateWithStrike();
  }
  else if(isSpare(score)){
    updateWithSpare();
  }
  else
  {
    updateStandardRoll(score);
  }
  for(var frameIndex = 0; frameIndex < 10; ++frameIndex) {
    var frameScore = game.getFrameScore(frameIndex);
    if(!isNaN(frameScore)){
      var frame = '#frame' + frameIndex;
      $(frame).html(frameScore);
    }
  }
}

function isStrike(score) {
  return score == 10;
}

function updateWithStrike() {
  var rollId = '#roll' + (rollIndex + 1);
  $(rollId).html('X');
  firstRollScore = 0;
  rollIndex += 2;
}

function isSpare(score) {
  return is_second_roll && (firstRollScore + score == 10);
}

function updateWithSpare() {
  var roll = '#roll' + rollIndex;
  $(roll).html('/');
  firstRollScore = 0;
  is_second_roll = false;
  generate_buttons(0);
  ++rollIndex;
}

function updateStandardRoll(score) {
  var rollId = '#roll' + rollIndex;
  $(rollId).html(score);
  if(is_second_roll){
    firstRollScore = 0;
    is_second_roll = false;
    generate_buttons(0);
  }else{
    is_second_roll = true;
    firstRollScore = score;
    generate_buttons(score);
  }
  ++rollIndex;
}

function generate_buttons(score) {
  var button = ""
  for(i = 0; i <= 10 - score; ++i){
    button += "<button type='button' onclick='roll(" + i + ")'>" + i + "</button>";
  }
  $('#buttons').html(button);
}

// * Each roll to be displayed
// * If it's a spare or a strike it should show X or / instead of the number
// * Buttons to change depending on what you've rolled
//
// * Keep track of the roll index (related to the column on your scoresheet)
// * Keep track of whether it's the first roll or the second roll - on the second roll
// - reset the buttons (generate_buttons(0)), reset the firstRoll =0, update the score.
//
// *UpdatewithStrike
// * Calculating score
