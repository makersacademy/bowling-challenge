$('document').ready(function() {

  var scorecard = new Scorecard(Frame);
  updateButtons();

  $('.bowl').click(function() {
    var pins = parseInt($(this).attr("value"));
    scorecard.bowl(pins);
    update();
    updateButtons();
  });

  function updateButtons() {
    // var limit = scorecard.frameRecord[scorecard.getCurrentFrame()].firstBowl;
    // if (limit === null) {
    //   limit = 10;
    // } else {
    //   limit = 10 - limit
    // }

    // for (var i = 1; i <= limit; i++) {
    //   $("#buttons").append('<li><a href="#" class="bowl" value="' + i + '">' + i + '</a></li>');
    // };

    // console.log(limit)

  };

  function update() {
    $('#frame1').text(scorecard.totals[0]);
    $('#frame2').text(scorecard.totals[1]);
    $('#frame3').text(scorecard.totals[2]);
    $('#frame4').text(scorecard.totals[3]);
    $('#frame5').text(scorecard.totals[4]);
    $('#frame6').text(scorecard.totals[5]);
    $('#frame7').text(scorecard.totals[6]);
    $('#frame8').text(scorecard.totals[7]);
    $('#frame9').text(scorecard.totals[8]);
    $('#frame10').text(scorecard.totals[9]);
    $('#total').text(scorecard.currentTotal());
  };

});