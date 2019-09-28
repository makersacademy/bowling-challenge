runPage = function() {
var scorecard = new Scorecard();

  $(document).ready(function() {

    $('#scorecard').text(scorecard.playerScore);
  })

};
