var bowlingScoreCard = new ScoreCard();

$(document).ready(function() {

  $('input[type="submit"]').click(function() {
    var pins = $('input[type="text"]').val()

    /// Check if user has input a number
    if (isNaN(pins)) { alert('Pins must be a number'); return }

    /// Convert user input string to number
    var pinsNum = parseInt(pins)

    ///Check number is between 1 and 10
    if ( pinsNum < 0 || pinsNum > 10) { alert("You can only knock down 0-10 pins"); return}

    /// Check user is not trying to knock down more than 10 pins in first 9 frames
    if ( checkForCheats(pinsNum) ) {return}

    /// Add pins to the score card and show to user
    bowlingScoreCard.roll(pinsNum)
    var api = new API(bowlingScoreCard)
    var json = api.call()
    var html = ''
    if (json.length > 0) {
      json.forEach(function(obj) {
        // console.log(obj)
        html += tableRow(obj)
        html = html.replace('null', '-')
      })

    }
    $('#score_card').find('tbody').html(html)
    makeSparesGreen()
    makeStrikesRed()
  })

  var tableRow = function(obj) {
    return '<tr><td>   ' + obj.frame +'   </td><td>   '
                      + obj.rollNum + '   </td><td>   '
                      + obj.roll +'   </td><td>   '
                      + obj.bonus + '   </td><td>   '
                      + obj.score + '   </td><td>   '
                      + obj.comments +
          '</td></tr>'
  }

  var makeSparesGreen = function() {
    $('td:contains("Spare!")').each(function() {
      $(this).css("color", "green").wrap('<em></em>')
    })
  }

  var makeStrikesRed = function() {
    $('td:contains("Strike!")').each(function() {
      $(this).css("color", "red").wrap('<strong></strong>')
    })
  }

  var checkForCheats = function(pins) {
    if ( !isLastFrame() || lastFrameNotStrikeOrSpare() || strikeOnLastFrameNotOnSecondRoll() ) {
      if ( checkForCheatsAllButLastFrame(pins) || checkForCheatsLastFrameStrike(pins) ) {
        alert('Stop cheating!')
        return true
      }
    }
  }

  var lastFrameNotStrikeOrSpare = function() {
    return (bowlingScoreCard.currentFrame === 9 && (!bowlingScoreCard.frames[9].isStrike() && !bowlingScoreCard.frames[9].isSpare()) )
  }

  var strikeOnLastFrameNotOnSecondRoll = function() {
    return (bowlingScoreCard.frames[9].roll1 === 10 && bowlingScoreCard.frames[9].roll2 !== 10)
  }

  var isLastFrame = function() {
    return bowlingScoreCard.currentFrame === 9
  }

  var checkForCheatsAllButLastFrame = function(pins) {
    return (!isLastFrame() && bowlingScoreCard.frames[bowlingScoreCard.currentFrame].roll1 + pins > 10)
  }

  var checkForCheatsLastFrameStrike = function(pins) {
    return bowlingScoreCard.frames[9].roll2 + pins > 10
  }

})
