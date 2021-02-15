$(document).ready(function() {
    var game = new Game();

    playGame();


    function playGame() {


      $("#ent-score").focus();
      
      $('#enter-score').submit(function(event) {
        event.preventDefault();
        var score = $('#ent-score').val();
        game.roll(parseInt(score));
        
        for (let [key, value] of Object.entries(game.scoreCard)) {
          console.log(key, value);
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
  })