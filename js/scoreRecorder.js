$(document).ready(function() {

  var scorecard = new Scorer()

  $("input[type='number']").on('input', function() {
      scorecard.storeScore(this.value,this.id);
      scorecard.removeNullsFromRolls();
      scorecard.bonusCalculator();
      scorecard.updatedBonusNotes();
      scorecard.calculateTotalScore();
      $("#scoreShow").text("Your score is: " + scorecard.totalScore)
  });

  $("#strikeExtraRolls").hide();

  jQuery('#note-10').bind('DOMSubtreeModified',function(event) {
    $("#strikeExtraRolls").toggle();
  });

});
