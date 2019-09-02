$(document).ready(function () {

  var scorecard = new Scorecard();


  $('.button-add-roll').click(function () {
    let roll = Number($('.input-next-roll').val())
    if (0 <= roll && roll <= 10) {
      try {

        scorecard.addRoll(roll)
      } catch (error_msg) {
        $(".error-msg-value").html(error_msg)
      }
    }
    $('.input-next-roll').val("")
    update_game_details();
  });


  function update_game_details() {
    $('.total-score-value').html(scorecard.total_score);
    $('.current-frame-value').html(scorecard.frame + 1);
    $('.current-roll-value').html(scorecard.roll + 1);

    for (let i = 0; i < 10; i++) {
      $(`#frame-${i} .frame-total-value`).html((scorecard.frames[i] || ""))
      $(`#frame-${i} .roll-1-value`).html((scorecard.rolls[i][0] || ""))
      $(`#frame-${i} .roll-2-value`).html((scorecard.rolls[i][1] || ""))
    }


  };

});