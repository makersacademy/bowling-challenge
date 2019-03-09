$(document).ready(function() {

  var scorecard = new Scorer()

  $("input[type='text']").on('input', function() {
      scorecard.storeScore(this.value,this.id)
      scorecard.spareCalculator();
      scorecard.updatedBonusNotes();
  });

  $("input[type='text']").on('input', function() {
      scorecard.calculateTotalScore()
      $("#scoreShow").text("Your score is: " + scorecard.totalScore)
  });

  $("#strikeExtraRolls").hide();

  jQuery('#note-10').bind('DOMSubtreeModified',function(event) {
    $("#strikeExtraRolls").toggle();
  });

});
