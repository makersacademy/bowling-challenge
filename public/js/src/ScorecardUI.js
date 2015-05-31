var scorecard = new Scorecard();

function getRandomInt(min, max) {
  return Math.floor(Math.random()*(max - min)) + min;
}

$(document).ready( function(){
  $('#bowl').on('click', function(){
    var bowl1 = getRandomInt(0,10);
    var bowl2 = getRandomInt(0,3);
    var extraBowl = getRandomInt(0,10);

    if (scorecard.bowls.length == 9 && bowl1 + bowl2 >= 10) {
      scorecard.runFrame(bowl1,bowl2,extraBowl);
    } else
      scorecard.runFrame(bowl1,bowl2);

    $('#frames').append('<li>' + scorecard.frameScore + '</li>');
    $('#total').html(scorecard.totalScore);
  });
});