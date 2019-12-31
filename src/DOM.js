$(document).ready(function() {
  var game = new Bowling()
  var rollNumber = 1
  var prevRoll = 0
  var isFinal = false

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
    prevRoll = pins
  }

  function updateFrameTotal() {
    game.cumulativeTotals().forEach( function (value, i) {
      $(`#total${i+1}`).text(`${value}`)
    })
  }

  function hideButtons(pins) {
    if (pins < 10) {
      $.each(Array(11), function(i) {
        if (pins + i > 10) {
          $(`#roll${i}`).attr('class', 'hide')
        }
      })
    }
  }

  function showButtons() {
    $("button").removeClass("hide");
  }

  $(function() {
    $.each(Array(11), function(i) {
      $(`#roll${i}`).click(function( event ) {
        updateFrame(i)
        game.roll(i)
        if (rollNumber % 2 === 0 || rollNumber > 20) {
          hideButtons(i)
        } else {
          showButtons()
        }
        updateScore()
        updateFrameTotal()
        if (rollNumber > 21) {
          $.each(Array(11), function(i) {
            $(`#roll${i}`).attr('class', 'hide')
          })
        }
      });
    });
  });

  $('#restart').click(function( event) {
    game = new Bowling()
    rollNumber = 1
    prevRoll = 0
    isFinal = false
    $('.rolls').empty()
    $('.totals').empty()
    $('#total').empty()
    showButtons()
  });
})
