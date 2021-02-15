$(document).ready(function() {
    var game = new Game();

    playGame();

    function playGame() {
      let message = "";

      $("#ent-score").focus();

      message = game.showMessage();
      displayMessage(message, 3000);
      
      $('#enter-score').submit(function(event) {
        event.preventDefault();
        var score = $('#ent-score').val();
        game.roll(parseInt(score));

        if (game.showMessage().includes('Strike')) {
          $('.scorecard').addClass('shake');
          setTimeout(() => {
            $('.scorecard').removeClass('shake');
        }, 1500);
        };

        displayMessage(game.showMessage(), 3000);
        
        for (let [key, value] of Object.entries(game.scoreCard)) {
          if (value.rolls.includes("X")) {
            $(`#rolls-${key}`).addClass('strike');
          };
          $(`#rolls-${key}`).text(value.rolls);
          $(`#score-${key}`).text(value.rollingscore);
        }
        $('#ent-score').val('')
        $("#ent-score").focus();

      })
    }

    function displayMessage(message, time) {
      if (message) {
        $('.message').text(message);
        $('.message-block').addClass('show')
        setTimeout(() => {
          $('.message-block').removeClass('show');
          game.clearMessage();
      }, time);
      };
    };

  })