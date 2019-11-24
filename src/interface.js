'use strict'

$(document).ready(function () {
  function onComplete () {
    $('.addScore').attr('disabled', true)
  }

  var tracker = new ScoreTracker(calculate, onComplete)

  function updateScoreTable () {
    var scores = tracker.scoreSheet()
    for (var i = 0; i < scores.length; i++) {
      var frame = scores[i]
      $('#frame' + (i + 1) + 'a').text(frame[0])
      $('#frame' + (i + 1) + 'b').text(frame[1])
      if (i === 9) {
        if (frame.length === 2) {
          if (frame[0] + frame[1] === 10) {
            $('.rollScores').append("<td colspan=2 id='additionalFrame1'></td>")
            $('#heading10').attr('colspan',6)
          }
          if (frame[1] === null) {
            $('.rollScores').append("<td colspan=2 id='additionalFrame2'></td>")
            $('#heading10').attr('colspan',8)
          }
        }
        if (frame.length > 2) {
          $('#additionalFrame1').text(frame[2])
        }
        if (frame.length > 3) {
          $('#additionalFrame2').text(frame[3])
        }
      }
    }
  }

  $('#gutter').on('click', function () {
    tracker.add(0)
    updateScoreTable()
  })

  $('#1').on('click', function () {
    tracker.add(1)
    updateScoreTable()
  })

  $('#2').on('click', function () {
    tracker.add(2)
    updateScoreTable()
  })

  $('#3').on('click', function () {
    tracker.add(3)
    updateScoreTable()
  })

  $('#4').on('click', function () {
    tracker.add(4)
    updateScoreTable()
  })

  $('#5').on('click', function () {
    tracker.add(5)
    updateScoreTable()
  })

  $('#6').on('click', function () {
    tracker.add(6)
    updateScoreTable()
  })

  $('#7').on('click', function () {
    tracker.add(7)
    updateScoreTable()
  })

  $('#8').on('click', function () {
    tracker.add(8)
    updateScoreTable()
  })

  $('#9').on('click', function () {
    tracker.add(9)
    updateScoreTable()
  })

  $('#10').on('click', function () {
    tracker.add(10)
    updateScoreTable()
  })

  $('#reset').on('click', function () {
    tracker = new ScoreTracker(calculate, onComplete);
    $('.scoretable td').empty()
    $('#additionalFrame1').remove()
    $('#additionalFrame2').remove()
    $('#heading10').attr('colspan',4)
    $('#result').text('?')
    $('.addScore').attr('disabled', false)
  })

  $('#calculate').on('click', function () {
    $('#result').text(tracker.total())
  })

})
