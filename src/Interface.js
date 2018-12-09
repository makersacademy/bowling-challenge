// setup
var s1 = new Scorecard();
var d1 = new Display();
var scorecard = s1;
var display = d1;
var player = 1;
var players = 1;
var ball = 0;
var total = 0

$(document).ready(function() {
  // add a new player row
  $('.new').click(function() {
    $('.players .player').last().clone().appendTo('.players');
    players += 1;
    eval(`s${players}= new Scorecard()`);
    eval(`d${players}= new Display()`);
    $('.players .player').last().attr('id', `player-${players}`)
  });
  // start the game
  $('.start').click(function() {
    $(".new").hide();
    $(".start").hide();
    $(".button").show();
    $(`#player-${player} #ball-${ball}`).addClass('current-with-border')
    $(`#player-${player} #ball-${ball + 1}`).addClass('current')
    $(`#player-${player} #total-${total}`).addClass('current')
  });
  // clicking a number button
  $('.button').click(function() {
    var whichButton = $(this).text();
    var buttonValue = parseInt(whichButton);
    // record the number of pins knocked down
    scorecard.throw(buttonValue);
    display.toDisplay(buttonValue);
    // remove frame highlight
    $(`#player-${player} #ball-${ball}`).removeClass('current-with-border')
    $(`#player-${player} #ball-${ball + 1}`).removeClass('current')
    if (total == 9) { $(`#player-${player} #ball-${ball + 2}`).removeClass('current') }
    $(`#player-${player} #total-${total}`).removeClass('current')
    
    var frameComplete = (scorecard._scores.length % 2 == 0);
    var tenthFrameComplete = (scorecard._frames[9] != undefined);
    var notTheLastPlayer = (player < players);
    var notTheTenthFrame = (scorecard._scores.length < 19);
    // move to the the next player or back to the first
    if (notTheTenthFrame && frameComplete) { if (notTheLastPlayer) { player += 1; } else { player = 1; ball += 2; total += 1; } }
    else if (tenthFrameComplete) { if (notTheLastPlayer) { player += 1; } else { player = 1; ball += 2; total += 1; } }
    // check if the game is over
    if (total < 10) {
      // add frame highlight
      $(`#player-${player} #ball-${ball}`).addClass('current-with-border')
      $(`#player-${player} #ball-${ball + 1}`).addClass('current')
      if (total == 9) { $(`#player-${player} #ball-${ball + 2}`).addClass('current') }
      $(`#player-${player} #total-${total}`).addClass('current')
    }
    // switch to the correct scorecard
    scorecard = eval('s' + player);
    display = eval('d' + player);
    // hide and unhide buttons according to situation
    if (scorecard._frames[9] != undefined) { $(".button").hide(); }
    else if (scorecard._scores.length % 2 == 0) { $(".button").show(); }
    else { $(".button").slice((11 - scorecard._scores[scorecard._scores.length - 1]),11).hide(); }
  });
  
  $(document).on('click', function() {
    var p, b, t;
    // display each players scorecard
    for (p = 1; p <= players; p++) {
      for (b = 0; b < 21; b++) { $(`#player-${p} #ball-${b}`).text(eval(`d${p}._display[b]`)); }
      for (t = 0; t < 10; t++) { $(`#player-${p} #total-${t}`).text(eval(`s${p}._frames[t]`)); }
    }
  });
});