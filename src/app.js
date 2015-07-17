$(document).ready(function() {

  var bowlingScoreCard = new ScoreCard();

  $('input[type="submit"]').click(function() {
    var pins = $('input[type="text"]').val()
    if (isNaN(pins) || parseInt(pins) < 0 || parseInt(pins) > 10) { alert("You can only knock down 0-10 pins"); return}
    bowlingScoreCard.roll(parseInt(pins))
    var api = bowlingScoreCard.api()
    var html = ''
    if (api.length > 0) {
      api.forEach(function(obj) {
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

})
