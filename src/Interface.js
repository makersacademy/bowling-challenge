// setup
var s1 = new Scorecard();
var d1 = new Display();
var scorecard = s1;
var display = d1;
var player = 1;
var players = 1;

$(document).ready(function() {
  $('.button').click(function() {
    var whichButton = $(this).text();
    var buttonValue = parseInt(whichButton);

    // record the number of pins knocked down
    scorecard.throw(buttonValue);
    display.toDisplay(buttonValue);
    
    var frameComplete = (scorecard._scores.length % 2 == 0);
    var notTheLastPlayer = (player < players);

    if (frameComplete) { if (notTheLastPlayer) { player += 1; } else { player = 1; } }

    // switch to the next players scorecard
    scorecard = eval('s' + player);
    display = eval('d' + player);
  });
  
  $(document).on('click', function() {
    var player, ball, total;

    // display each players scorecard
    for (player = 1; player <= players; player++) {
      for (ball = 0; ball < 21; ball++) { $(`#player-${player} #ball-${ball}`).text(eval(`d${player}._display[ball]`)); }
      for (total = 0; total < 10; total++) { $(`#player-${player} #total-${total}`).text(eval(`s${player}._frames[total]`)); }
    }

    // hide and unhide buttons according to situation
    if (s1._scores[0] != undefined){ $(".new").hide(); }
    if (scorecard._frames[9] != undefined) { $(".button").hide(); }
    else if (scorecard._scores.length % 2 == 0) { $(".button").show(); }
    else { $(".button").slice((11 - scorecard._scores[scorecard._scores.length - 1]),11).hide(); }
  });

  // add a new player row
  $('.new').click(function() {
    $('.players .player').last().clone().appendTo('.players');
    players += 1;
    eval(`s${players}= new Scorecard()`);
    eval(`d${players}= new Display()`);
    $('.players .player').last().attr('id', `player-${players}`)
  });
});