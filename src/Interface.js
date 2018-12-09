scorecard = new Scorecard();
display = new Display();

$(document).ready(function() {
  $('.button').click(function() {
    var k = $(this).text();
    var l = parseInt(k);
    scorecard.throw(l);
    display.toDisplay(l);
  });
  
  $(document).on('click', function() {
    var i, j;
    for (i = 0; i < 21; i++) { $(`#ball-${i}`).text(display._display[i]); }
    for (j = 0; j < 10; j++) { $(`#total-${j}`).text(scorecard._frames[j]); }

    if (scorecard._frames[9] != undefined) { $(".button").hide(); }
    else if (scorecard._scores.length % 2 == 0) { $(".button").show(); }
    else { $(".button").slice((11 - scorecard._scores[scorecard._scores.length - 1]),11).hide(); }
  });
});