var bowlingScore = new BowlingScore()

$(document).ready(function(){

  $('.pin').click(function(){
    value = parseInt($(this).val());
    bowlingScore.roll(value);
    catchError();
    if(isLastFrame()) lastFrameCalc();
    else normalFrameCalc();
    getFramesScore()
  });

});

function normalFrameCalc() {
  if (isStrike()) writeStrikeFrame()
  else if (isSpare()) writeRoll('/')
  else writeRoll(lastRoll())
  removeEmptyClass()
}

function lastFrameCalc() {
  if (isStrike()) writeLastFrameRoll('X')
  else if (isLastFrameSpareOnSecondRoll()) writeLastFrameRoll('/')
  else writeLastFrameRoll(lastRoll())
  removeLastFrameEmptyClass()
  if (bowlingScore.game_over) removeLastFrameEmptyClass()
}

function catchError() {
  $('#error').html('');
  window.onerror = function () {
    $('#error').html('Roll not allowed!');
  };
}

function lastRoll() {
  return bowlingScore.rolls[bowlingScore.rolls.length - 1];
}

function firstRollOfFrame() {
  return parseInt($('.roll.empty').first().prev('.roll').html());
}

function isSpare() {
  return firstRollOfFrame() + lastRoll() === 10;
}

function isStrike() {
  return lastRoll() == 10;
}

function writeRoll(roll) {
  $('.roll.empty').first().html(roll);
}

function writeStrikeFrame() {
  writeRoll('&nbsp;');
  removeEmptyClass();
  writeRoll('X');
}

function removeEmptyClass() {
  $('.roll.empty').first().removeClass('empty')
}

function isLastFrame() {
  return $(".roll.empty").length === 0;
}

function isLastFrameSecondRoll() {
  return $(".last_frame_roll.empty").length === 2
}

function isLastFrameSpare() {
  return parseInt($('.last_frame_roll').first().html()) + lastRoll() === 10;
}

function isLastFrameSpareOnSecondRoll() {
  return isLastFrameSecondRoll() && isLastFrameSpare();
}

function writeLastFrameRoll(roll) {
  $('.last_frame_roll.empty').first().html(roll);
}

function removeLastFrameEmptyClass() {
  $('.last_frame_roll.empty').first().removeClass('empty')
}

function getFramesScore() {
  $.each(bowlingScore.frames, function(frame){
    if(!isNaN(bowlingScore.frames[frame])) {
      $('.total' + (frame + 1)).html(bowlingScore.score(frame));
    }
  })
}