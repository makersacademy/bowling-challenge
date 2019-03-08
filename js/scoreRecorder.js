$(document).ready(function() {

  var scorecard = new Scorer()

  $("input[type='text']").on('input', function() {
      console.log("hello");
      console.log(this.name, this.value, this.id);
      scorecard.storeScore(this.value,this.id)
      console.log(scorecard.rolls);
  });

});
