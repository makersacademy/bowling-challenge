$(document).ready(function() {

  var scorecard = new Scorer()

  $("input[type='text']").on('input', function() {
      scorecard.storeScore(this.value,this.id)
      scorecard.spareCalculator();
  });


});
