$(document).ready(function(){
  var scorecard = new Scorecard();
  updateScores()

  // on submit click
  $('#submit').on('click', function() {
    event.preventDefault()
    
    // save inputs
    var roll1 = parseInt($('#roll1').val());
    var roll2 = parseInt($('#roll2').val());
    

    //execute input
    scorecard.input(roll1, roll2);
    updateScores()
  })

  function updateScores() {
    arr = scorecard.returnScorecard();
    console.log(arr)
    $('#full_array').text(arr);


    for (var i = 0; i < 35; i++) {
    console.log(arr[i])
    $('#roll-' + i).text(arr[i]);

    };
  };
  

});