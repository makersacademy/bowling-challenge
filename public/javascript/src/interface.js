$(document).ready(function(){
  var scorecard = new Scorecard();
  updateScores()

  // on submit click
  $('#submit').on('click', function() {
    event.preventDefault()

    var roll1 = parseInt($('#roll1').val());
    var roll2 = parseInt($('#roll2').val());
    
    scorecard.input(roll1, roll2);
    updateScores()
  })

  function updateScores() {
    arr = scorecard.returnScorecard();

    for (var i = 0; i < 35; i++) {
    console.log(arr[i])
    $('#roll-' + i).text(arr[i]);

    };
  };
  
});