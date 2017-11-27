$(document).ready(function() {

  var bowling = new Bowling();
  var frame = [];
  var divId = 1;
  var frameId = 1;
  var strikeTracker = 0;
  var spareTracker = 0;
  var frameNumber = 0;

  function updateScore () {
    $("#score").html(bowling.total());
    frame = [];
  }

  function createButtons(limit) {
    for (var i=0; i<=limit; i++) {
      $('#buttons').append('<input class="bowl-button" type="button" value="' + i + '">');
    }
  }

  function addBowlToDiv(bowl, id) {
    var isRightCorner = $("#" + id).hasClass('right-corner');
    var leftCornerValue = parseInt($("#" + (id-1)).html());
    if (id < 19) {
      if (bowl === 10) {
        $("#" + (id + 1)).append('X');
      } else if (isRightCorner && (leftCornerValue + bowl === 10)) {
        $("#" + id).append('/');
      } else {
        $("#" + id).append(bowl);
      }
    } else {
      if (bowl === 10) {
        $("#" + id).append('X');
      } else {
        $("#" + id).append(bowl);
      }
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
      divId = 1;
      emptyDivs();
    })
  }

  function frameScore(id) {
    var divId = "#frame-" + id;
    var total = frame[0] + frame[1];
    if (total === 10) {

    }
    if (frame.length == 2) {
      $(divId).append(bowling.total());
    }
  }

  function frameTotal(id) {
    var divId = "#frame-" + id;
    var total = bowling.framesTotal(id);
    $(divId).html(bowling.framesTotal(id));
  }

  function emptyDivs() {
    for (var i=1; i<=21; i++) {
      $('#' + i).html('');
    }
  }

  function strike() {
    bowling.bowl([10, 0]);
    updateScore();
  }

  function bowl(frame) {
    bowling.bowl(frame);
    updateScore();
  }

  function addListener() {
    $('.bowl-button').click(function() {
      var clicked = parseInt($(this).val());
      if (strikeTracker >= 1) {
        strikeTracker++;
      }
      if (strikeTracker === 4) {
        frameTotal(frameNumber);
        strikeTracker = 0;
      }
      addBowlToDiv(clicked, divId);
      bowling.frames().length < 9 && clicked === 10 ? divId += 2 : divId++ ;
      frame.push(clicked);
      if (frame.length !== 2 && clicked !== 10) {
        refreshButtons(10 - clicked);
      }
      if (bowling.frames().length < 9) {
        if (clicked === 10) {
          strike();
          frameNumber = bowling.frames().length;
          strikeTracker++;
        } else if (frame.length === 2) {
          bowl(frame);
          var frameNo = bowling.frames().length;
          $("#frame-" + frameNo).html(bowling.total());
          refreshButtons(10);
        }
      }
      if (bowling.frames().length === 9) {
        if (frame.length === 2) {
          refreshButtons(10);
        }
        if ((frame[0] === 10 || frame[0] + frame[1] === 10) && frame.length === 3) {
          bowl(frame);
        } else if (frame.length === 2 && frame[0] !== 10 && frame[0] + frame[1] !== 10) {
          bowl(frame);
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
