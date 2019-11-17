$(document).ready(function(){

    var score = new Score();
    var score1, score2, score3;
    
    function calculateScore(){
      score.totalScore(score.scoreArray);
    }

  //   $("#enter-value").change(function()
  //   {
  //   if (score.scoreArray.length == 9) {
  //     $('roll-three').show(); 
  //   } else {
  //   $('roll-three').hide(); 
  //   }
  //  });
  //  $('roll-three').hide(); 

    $('#enter-value').submit(function(event) {
        event.preventDefault();
        score1 = parseInt($('#roll-one').val());
        score2 = parseInt($('#roll-two').val());
        score3 =  parseInt($('#roll-three').val());

        $(".error").remove();

        if (score1 >10) {
          $('#roll-one').after('<span class="error">Maximum value for a roll is 10</span>');
        }

        if ((score1 + score2) >10) {
        $('#roll-two').after('<span class="error">Maximum value for a frame is 10</span>');
        }

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
