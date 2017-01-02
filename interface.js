$(document).ready(function(){
  var game = new Game()
  var scoreboard = new Scoreboard()
  $('#frameCount').text(game.frameCount)

  $(function () {
    $('#firstRoll').hide()
    $('#secondRoll').hide()
  $('#rackUp').click(function(){
    game.increaseFrameCount()
    updateFrameCount()
    $('#rackUp').hide()
      $('#firstRoll').show()
                if ($(this.rackedPins).val() === false) {
                  $('.roll1').prop('disabled', true)
              } else {
                  $('.roll1').prop('disabled', false)
              }
  })

})

  $(function () {
  $('#firstRoll').click(function(){
    $(this).hide()
    $('#secondRoll').show()
  $('#firstScore').text(scoreboard.scoreFirstRoll(game.rollOne()))
  if ($(this.sweepComplete).val() === false) {
              $('.roll2').prop('disabled', true)
          } else {
              $('.roll2').prop('disabled', false)
          }
      })
  })

  $('#secondRoll').click(function(){
    $(this).hide()
    $('#rackUp').show()
  $('#secondScore').text(scoreboard.scoreSecondRoll(game.rollTwo()))
  updateCurrentScore()
  })

  window.onerror=function(){
   alert("Game Over! Please start a new game")
   $('#rackUp').hide()
   return true
 }

  function updateFrameCount() {
    $('#frameCount').text(game.frameCount)
  }

  function updateCurrentScore() {
    scoreboard.bonusPoints()
    scoreboard.calculatedTotal()
    $('#currentTotalScore').text(scoreboard.totalCalculated)
  }


})
