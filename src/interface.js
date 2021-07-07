$(document).ready(function(){

    var score = new Score();
    var score1, score2, score3;
    
    function calculateScore(){
      score.totalScore(score.scoreArray);
    }

    $('#roll-three-div').hide();
    $('#roll-two-div').hide(); 
    $(".no_game").hide(); 

    $('#roll-one-div').submit(function(event) {
        event.preventDefault();
        $(".error").remove();

        score1 = $('#roll-one').val();

          if (score1 >10) {
            $('#roll-one').after('<span class="error">Maximum value for a roll is 10</span>');
            return false;}
          else if (isNaN(score1)) {
            $('#roll-one').after('<span class="error">Please enter a number</span>');
            return false;
            }
          else {
              score1 = parseInt(score1)
              score.addRoll(score1);
          }

        $('#display-roll').text((score.frame.length)+1 );
          
        $('#roll-one-div').hide(); 
        $('#roll-two-div').show(); 
        $('#roll-two').val('');
      })

      $('#roll-two-div').submit(function(event) {
          event.preventDefault();
          $(".error").remove();
          
          score2 = $('#roll-two').val();

          if ((score1 + parseInt(score2)) > 10) {
            $('#roll-two').after('<span class="error">Maximum value for a frame is 10</span>');
            return false;}
            else if (isNaN(score2)) {
            $('#roll-two').after('<span class="error">Please enter a number</span>');
            return false;
            }
            else {
              score2 = parseInt(score2)
              score.addRoll(score2);
          }

          if (score.scoreArray.length === 9 && (parseInt(score1) + parseInt(score2)) == 10) {
            $('#roll-two-div').hide(); 
            $('#roll-one-div').hide(); 
            $('#roll-three-div').show();             
          } 

          else {
            score.addFrame(score.frame);

            //$('#display-array').text(score.scoreArray.join(" - "));
            $('#display-frame').text((score.scoreArray.length) + 1);
            $('#display-roll').text((score.frame.length)+1 );
            
            score.totalScore(score.scoreArray);
            $('#display-score').text(score.showSum());

            var markup = "<tr><td>" + (score.scoreArray.length) + "</td><td>" + score1 + "</td><td>" + score2  + "</td></tr>";    
            $("#table").append(markup);
    
            $('#roll-one-div').show(); 
            $('#roll-two-div').hide(); 
            $('#roll-one').val('');
          }

        if (score.scoreArray.length > 9) {
          $('.game').hide();
          $('.no_game').show();
          calculateScore();
          if (score.showSum() === 300 ) {
            $('#final-score').text('Perfect Game');
          }
          else if (score.showSum() === 0 ) {
            $('#final-score').text('Gutter Game');
          }
          else
          $('#final-score').text(score.showSum());
        };
 
      
      
      })

      $('#roll-three-div').submit(function(event) {
        event.preventDefault();
        $(".error").remove();

        score3 = $('#roll-three').val();

        if (score3 >10) {
          $('#roll-three').after('<span class="error">Maximum value for a roll is 10</span>');
          return false;}
        else if (isNaN(score3)) {
          $('#roll-three').after('<span class="error">Please enter a number</span>');
          return false;
          }
        else {
            score3 = parseInt(score3)
            score.addRoll(score3);
            score.addFrame(score.frame);      
        }
        
        if (score.scoreArray.length > 9) {
          $('.game').hide();
          $('.no_game').show();
          calculateScore();
          $('#final-score').text(score.showSum());
        };

      })
    
});
