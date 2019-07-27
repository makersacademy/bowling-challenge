$(document).ready(function() {
  var scorecard = new Scorecard();

  var new_frame = $('.new_frame').html()

  populate_frame()

  function populate_frame() {
    var score = scorecard.score;
    var frame = scorecard.frame;
    $('.total_score').html(`Score: ${score}`);
    $('.frame_number').html(`Frame: ${frame}`);
    $('.frame_number').attr('class','finished_frame')
  }

  function generate_frame() {
    $('.master_container').append(new_frame)
    populate_frame()
  }

  function generate_bonus_frame() {
    console.log("generating bonus frame")
    bonus_frame = $('.bonus_frame').html()
    $('.master_container').append(bonus_frame)
    populate_frame()
  }

  function end_game() {
    $('.the_end').attr('hidden',false)
    $('.the_end').html(`The game has ended. Your final score was ${scorecard.score}`)
  }

  function numerify(number) {
    if (number === "") {
      return 0
    } else {
      return parseInt(number,10)
    }
  }

  $(document).on('click', '.submit_score', function(){

      $("#first_roll").prop('disabled', true);
      $("#second_roll").prop('disabled', true);
      
      string_first = $("#first_roll").val()
      string_second = $("#second_roll").val()

      first = numerify(string_first)
      second = numerify(string_second)

      if(first>10 || second>10) {
        alert("You can't knock down more than 10 pins in one roll!")
        return
      }else if(scorecard.frame<10 && first + second > 10) {
        alert("Your combined score can't be more than 10!")
        return
      };

      scorecard.submit(first,second)
      $("#first_roll").attr('id','finished_roll')
      $("#second_roll").attr('id','finished_roll')
      $('.submit_score').attr('hidden',true)
      $('.submit_message').attr('hidden',false)

      if (scorecard.gameStatus === 'ended') {
        end_game()
      } else if (scorecard.gameStatus === 'bonus') {
        generate_bonus_frame()
      } else {
        generate_frame()
      }

  })

  $(document).on('click', '.submit_bonus', function(){
    var string_first = $("#first_roll").val()
    var first = numerify(string_first)
    if(first>10){
      alert("You can't knock down more than 10 pins in one roll!")
      return
    }
    scorecard.score += first
    $('.total_score').html(`Score: ${scorecard.score}`);
    scorecard.gameStatus = 'ended'
    end_game()
  })

});
