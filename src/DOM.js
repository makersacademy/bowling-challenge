$(document).ready(function () {
  var game = new Bowling()
  var rollNumber = 1
  var prevRoll = 0
  var isFinal = false
  selectFrame()

  function updateScore() {
    $('#total').text(`${game.total()}`)
  }

  function updateFrame(pins) {
    if (pins === 0) {
      $(`#r${rollNumber}`).text('-')
    } else if (pins === 10) {
      $(`#r${rollNumber}`).text('X')
    } else if ((rollNumber % 2 === 0 || isFinal) && prevRoll + pins === 10) {
      $(`#r${rollNumber}`).text('/')
    } else {
      $(`#r${rollNumber}`).text(`${pins}`)
    }
    if (pins === 10 && game.frameCount() < 10) {
      rollNumber += 2
    } else {
      rollNumber++
    }
    if (rollNumber === 21 && prevRoll === 10) isFinal = true
  }

  function updateFrameTotal() {
    game.cumulativeTotals().forEach( function (value, i) {
      $(`#total${i+1}`).text(`${value}`)
    })
  }

  function selectFrame() {
    $("col").removeClass('currentFrame')
    if (rollNumber < 21) {
      var i = Math.round(rollNumber/2)
      $(`#col${i}`).attr('class', 'currentFrame')
    } else {
      $(`#col10`).attr('class', 'currentFrame')
    }
  }

  function hideButtons(pins) {
    if (pins < 10) {
      $.each(Array(11), function(i) {
        if (pins + i > 10) {
          $(`#roll${i}`).attr('class', 'rollbutton hide')
        }
      })
    }
  }

  function showButtons() {
    $("button").removeClass("hide");
  }

  function updateButtons(pins) {
    if ((rollNumber > 21) || (rollNumber === 21 && prevRoll + pins < 10)) {
      $.each(Array(11), function(i) {
        $(`#roll${i}`).attr('class', 'rollbutton hide')
      })
    } else if (rollNumber % 2 === 0 || rollNumber === 21 && prevRoll + pins > 10) {
      hideButtons(pins)
    } else {
      showButtons()
    }
  }

  $(function () {
    $.each(Array(11), function(pins) {
      $(`#roll${pins}`).click(function ( event ) {
        updateFrame(pins)
        game.roll(pins)
        updateScore()
        updateFrameTotal()
        updateButtons(pins)
        selectFrame()
        prevRoll = pins
      });
    });
  });

  $('#restart').click(function ( event ) {
    game = new Bowling()
    rollNumber = 1
    prevRoll = 0
    isFinal = false
    $('.rolls').empty()
    $('.totals').empty()
    $('#total').empty()
    showButtons()
    selectFrame()
  });
})
