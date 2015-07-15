$(document).ready(function() {

  var bowlingScoreCard = new ScoreCard();

  $('input[type="submit"]').click(function() {
    var pins = $('input[type="text"]').val()
    bowlingScoreCard.roll(parseInt(pins))
    var api = bowlingScoreCard.rolling_scores()
    var html = ''
    if (api.length > 0) {
      api.forEach(function(obj) {
        console.log(obj)
        // console.log(tableRow(obj, 2, obj.score))
          // html += tableRow(obj, 1, '') + tableRow(obj, 2, obj.score)
          // if (obj.frame === 10) {$('#score_card').html(tableRow(obj, 3))}
      })

    }
    // $('#score_card').find('tbody').html(html)
  })

  var tableRow = function(obj, rollNumber, score) {
    return '<tr><td>   ' + obj.frame +'   </td><td>   '
                      + rollNumber + '   </td><td>   '
                      + obj.rolls[rollNumber -1] +'   </td><td>   '
                      + obj.bonus + '   </td><td>   '
                      + score + '   </td><td>   '
                      + obj.comments +
          '</td></tr>'
  }

})
