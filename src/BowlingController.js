$(document).ready(function() {

  var bowling = new Bowling();
  var frame = [];

  function updateScore () {
    $("#score").html(bowling.total());
    frame = [];
  }

  function createButtons(limit) {
    for (var i=1; i<=limit; i++) {
      $('#buttons').append('<input class="bowl-button" type="button" value="' + i + '">');
    }
  }

  function restartButton() {
    $('.bowl-button').remove();
    $('#buttons').append('<input id="restart" type="button" value="Restart">');
    $('#restart').click(function() {
      bowling.reset();
      updateScore();
      $('#restart').remove();
      refreshButtons(10);
    })
  }

  function strike() {
    bowling.bowl([10, 0]);
  }

  function addListener() {
    $('.bowl-button').click(function() {
      var clicked = parseInt($(this).val());
      frame.push(clicked);
      if (frame.length !== 2 && clicked !== 10) {
        refreshButtons(10 - clicked);
      }
      if (bowling.frames().length < 9) {
        if (clicked === 10) {
          strike();
          updateScore();
        } else if (frame.length === 2) {
          bowling.bowl(frame);
          updateScore();
          refreshButtons(10);
        }
      }
      if (bowling.frames().length === 9) {
        if (frame.length === 2) {
          refreshButtons(10);
        }
        if ((frame[0] === 10 || frame[0] + frame[1] === 10) && frame.length === 3) {
          bowling.bowl(frame);
          updateScore();
        } else if (frame.length === 2 && frame[0] !== 10 && frame[0] + frame[1] !== 10) {
          bowling.bowl(frame);
          updateScore();
        }
      }
      if (bowling.frames().length === 10) {
        restartButton();
      }
    })
  }

  function refreshButtons(limit) {
    $('.bowl-button').remove();
    createButtons(limit);
    addListener();
  }

  refreshButtons(10);

  updateScore();

})
