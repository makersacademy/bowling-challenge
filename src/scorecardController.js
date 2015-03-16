$('document').ready(function() {

  var scorecard = new Scorecard(Frame);

  $('.bowl').click(function() {
    var pins = parseInt($(this).attr("value"));
    scorecard.bowl(pins);
    updateButtons();
    update();
  });

  function updateButtons() {
    var limit = scorecard.frameRecord[scorecard.currentFrame].firstBowl;
    if (limit === null || limit === 10) {
      $('#buttons > li').show();
    } else {
      for (var i = 10; i >= (10 - limit); i--) {
        $('#buttons > li').eq(i).hide();
      };
    }
  };

  function update() {
    for (var i = 1; i <= 10; i++) {
      $('#frame' + i).text(scorecard.totals[i - 1]);
    };
    $('#total').text(scorecard.currentTotal());
  };
});