$(document).ready(function() {

  //generating players

  $(document).on('click','.add_player', function() {
    var extra = $('.player_name').get(0).outerHTML;
    $('.names').append(extra);
  });

  $(document).on('click','.submit_names', function() {
    var scorecards = [];
    var player_names = $('input[name^=names]').map(function(idx, elem) {
      return $(elem).val();
    }).get();

    $('.player_entry').attr('hidden',true)
    $('.bowling_grid').attr('hidden',false);

    player_names.forEach(function(name) {
      scorecards.push(new Scorecard(name));
    });

    //generating bowling scorecard

    var player_row = $('.player_row').html()
    var counter = 0
    var player_counter = counter % scorecards.length

    scorecards.forEach(function(scorecard){
      $('.bowling_grid').append(player_row);
      $('.player_name').last().html(scorecard.name);
      $('.player_score').last().html(scorecard.score);
      $('.frame_number').html(`Frame ${scorecard.frame}`);
    });
    $(`.master_container:eq(${player_counter + 1})`).attr('id','current_player')
    $('#current_player input').removeAttr("disabled")
    $('#current_player button').removeAttr("disabled")
    roll_rules()

    //checking the input is valid

    function numerify(number) {
      if (number === "") {
        return 0
      } else {
        return parseInt(number,10)
      }
    }

    function roll_rules() {
      $( ".roll" ).change(function() {
        var string_first = $("#current_player .first_roll").val();
        var string_second = $("#current_player .second_roll").val();

        var first = numerify(string_first);
        var second = numerify(string_second);

        if(first>10){
          alert("You can't knock down more than 10 pins in one roll!");
          $("#current_player .first_roll").val('');
          return;
        } else if(second>10) {
          alert("You can't knock down more than 10 pins in one roll!");
          $("#current_player .second_roll").val('');
          return;
        }else if(scorecards[0].frame<10 && first + second > 10) {
          alert("Your combined score can't be more than 10!");
          $("#current_player .first_roll").val('');
          $("#current_player .second_roll").val('');
          return;
        };

      });
    }

    //when submit is clicked

    $(document).on('click', '#current_player .submit_score', function(){

      //saves and updates the score
      var string_first = $("#current_player .first_roll").val();
      var string_second = $("#current_player .second_roll").val();
      var first = numerify(string_first);
      var second = numerify(string_second);
      var scorecard = scorecards[player_counter];
      console.log(scorecard.name);
      console.log(scorecard.score);
      scorecard.submit(first,second);
      $('#current_player .player_score').html(scorecard.score);

      //disables the roll input fields and changes their classes to a normal roll
      $("#current_player .first_roll").prop('disabled', true);
      $("#current_player .second_roll").prop('disabled', true);
      $("#current_player .first_roll").attr('class', 'roll');
      $("#current_player .second_roll").attr('class', 'roll');
      $('#current_player .submit_score.current').attr('hidden',true);
      $('#current_player .submit_message.current').attr('hidden',false);
      $('#current_player .submit_score.current').attr('hidden',true);
      $('#current_player .submit_message.current').attr('hidden',false);

      //logic to freeze old frames at the correct number
      $('.frame_number').each(function(){
        $(this).attr('class','finished_frame')
      });

      //10th frame bonus frame logic
      player_counter = counter % scorecards.length;
      if(scorecards[player_counter].gameStatus === 'bonus') {
        bonus_frame = $('.bonus_frame').html()
        $(`.master_container:eq(${player_counter + 1})`).append(bonus_frame)
        return
      }

      //new frames logic
      if (scorecards[scorecards.length-1].gameStatus === 'ended') {
        end_game()
      } else if(player_counter === scorecards.length - 1) {
        generate_frames()
        roll_rules()
      }

      //changes to the next player
      $(`.master_container:eq(${player_counter + 1})`).removeAttr('id');
      counter ++;
      player_counter = counter % scorecards.length;

      $(`.master_container:eq(${player_counter + 1})`).attr('id','current_player');
      $('#current_player .first_roll').removeAttr("disabled");
      $('#current_player .second_roll').removeAttr("disabled");
      $('#current_player .submit_score.current').removeAttr("disabled");

    });

    var new_frame = $('.new_frame').get(0).outerHTML

    function generate_frames() {
      var c = 1;
      scorecards.forEach(function(scorecard){
        $(`.master_container:eq(${c})`).append(new_frame)
        c++;
      })
      $('.frame_number').each(function(){
        $(this).html(`Frame ${scorecards[0].frame}`)
      });
    }

    function end_game() {
      $('.the_end').attr('hidden',false)
      $('.the_end').html(`The game has ended.`)
    }

    $(document).on('click', '.submit_bonus', function(){
      var string_first = $(".bonus_roll").last().val()
      var first = numerify(string_first)
      if(first>10){
        alert("You can't knock down more than 10 pins in one roll!")
        $("#current_player .bonus_roll").val('');
        return
      }
      var scorecard = scorecards[player_counter]
      scorecard.score += first
      $('#current_player .player_score').html(`${scorecard.score}`);
      scorecard.gameStatus = 'ended'
      console.log(scorecard)

      $("#current_player .bonus_roll").prop('disabled', true);
      $('#current_player .submit_bonus').attr('hidden',true);
      $('#current_player .bonus_message').attr('hidden',false);

      //if it's the last player, end game, otherwise move to next player ...
      if (scorecards[scorecards.length-1].gameStatus === 'ended') {
        end_game()
      }else{
        $(`.master_container:eq(${player_counter + 1})`).removeAttr('id');
        counter ++;
        player_counter = counter % scorecards.length;

        $(`.master_container:eq(${player_counter + 1})`).attr('id','current_player');
        $('#current_player .first_roll').removeAttr("disabled");
        $('#current_player .second_roll').removeAttr("disabled");
        $('#current_player .submit_score.current').removeAttr("disabled");
      }
    })

  });

});
