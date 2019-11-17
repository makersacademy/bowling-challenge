$(document).ready(function(){

    var score = new Score();
    var score1, score2, score3;
    
    function calculateScore(){
      score.totalScore(score.scoreArray);
    }

    $('#enter-value').submit(function(event) {
        event.preventDefault();
        score1 = parseInt($('#roll-one').val());
        score2 = parseInt($('#roll-two').val());
        score3 =  parseInt($('#roll-three').val());
        score.addRoll(score1,score2);
        $('#display-array').text(score.scoreArray.join(" - "));
        $('#display-frame').text(score.scoreArray.length);
      });
    
      


      $('#calculate-score').submit(function(event) {
        event.preventDefault();
        calculateScore();
        $('#display-score').text(score.showSum());
      });
      
});
