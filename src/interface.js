$(document).ready(function(){

    var score = new Score();
    var score1, score2, score3;
    
    function calculateScore(){
      score.totalScore(score.scoreArray);
    }

    $('#roll-three').hide();
    $(".no_game").hide(); 

    $('#enter-value').submit(function(event) {
        event.preventDefault();
        score1 = parseInt($('#roll-one').val());
        score2 = parseInt($('#roll-two').val());
        score3 = parseInt($('#roll-three').val());

        $(".error").remove();
      
        if (score.scoreArray.length === 8) {
          $('#roll-three').show(); 
        } 

        if (score.scoreArray.length > 8) {
          $('.game').hide();
          $('.no_game').show();
        } 

        if (score1 >10) {
          $('#roll-one').after('<span class="error">Maximum value for a roll is 10</span>');
          return false;
        }

        if ((score1 + score2) >10) {
        $('#roll-two').after('<span class="error">Maximum value for a frame is 10</span>');
        return false;
        }

        score.addRoll(score1,score2);

        $('#display-array').text(score.scoreArray.join(" - "));
        $('#display-frame').text((score.scoreArray.length) + 1);
        calculateScore();
        $('#display-score').text(score.showSum());
        
      });
    
      


      // $('#calculate-score').submit(function(event) {
      //   event.preventDefault();
      //   calculateScore();
      //   $('#display-score').text(score.showSum());
      // });
      
});
