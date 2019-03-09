$(document).ready(function() {

  var scorecard = new Scorer()

  $("input[type='text']").on('input', function() {
      scorecard.storeScore(this.value,this.id)
      scorecard.spareCalculator();
      scorecard.updatedBonusNotes();
  });

  $("input[type='text']").on('input', function() {
      scorecard.calculateTotalScore()
      $("#scoreShow").text(scorecard.totalScore)
  });


});
