$(document).ready(function() {

  var scorecard = new Scorecard();
  var i = 1;

  updateTotal();

  $('#add-scores').submit(function(event) {
    var frame = new Frame();
    event.preventDefault();
    var roll1 = $('#roll1').val();
    var roll2 = $('#roll2').val();
    frame.add(roll1, roll2)
    scorecard.add(frame)
    $('#roll1_frame' + i).text(frame.getFirstRoll());
    $('#roll2_frame' + i).text(frame.getSecondRoll());
    updateTotal();
    i += 1
  })

  function updateTotal() {
    $('#total').text(scorecard.getCurrentTotal());
  }
});
