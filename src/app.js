$(document).ready(function() {

  var bowlingScoreCard = new ScoreCard();

  $('input[type="submit"]').click(function() {
    var pins = $('input[type="text"]').val()
    bowlingScoreCard.roll(parseInt(pins))
    var api = bowlingScoreCard.rolling_scores()
    if (api.length > 0) {
      api.forEach(function(obj) {
        // console.log(tableRow(obj, 1, null))
        // console.log(tableRow(obj, 2, obj.score))
          $('#score_card').html(tableRow(obj, 1, '') + tableRow(obj, 2, obj.score) )
          // if (obj.frame === 10) {$('#score_card').html(tableRow(obj, 3))}
      })
    }
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
