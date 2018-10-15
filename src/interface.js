$(document).ready(function runDocument() {
  var game = new Game()
  var frame = 0

  $('#namesub').on('click', function(event) {
    event.preventDefault()
    let name = $('#nameInput').val()
    $('#nameTable').text(name)
    $('#playername').hide()
  })

  $('.scoreButton').on('click', function(data) {
    var input = Number(data.currentTarget.innerHTML)
    for (var i = 0; i < 11; i++) {
      $('#' + i).prop('disabled', false)
    }

    hidebuttons(input)

    if ( input === 10 ) {
      $('#F' + game.currentFrame + 'r' + game.currentRoll).text('X')
      $('#F' + game.currentFrame + 'r' + (game.currentRoll + 1 )).text('-')
    } else {
      $('#F' + game.currentFrame + 'r' + game.currentRoll).text(input)
    }

    game.roll(input)
    if (input === 10 || game.currentRoll === 2) {
      frame += 1
    }
    $('#totframe' + frame).text(game.score())


     if (game.currentFrame === 10 && game.currentRoll > 3) {
       $('#total').text(game.score())
      }
    $('#roll').text(game.currentRoll)
    $('#frame-num').text(game.currentFrame)
    gameOver()
  })

  hidebuttons = function(input) {
    if (game.currentRoll === 1 && input !== 10) {
      var num = (10 - input) + 1

      for (var i = num; i < 11; i++) {
        $('#' + i).prop('disabled', true)
      }
    }
  }

   $('.playagain').click(function() {
    for (var i = 0; i < 11; i++) {
      for (var j = 1; j <3; j++) {
        $('#F' + i + 'r' + j).text(' ')
      }
      $('#totframe' + i).text(' ')
    }

    for (var i = 0; i < 4; i++) {
      $('#F10r' + i ).text(' ')
    }

    $('#total').text(' ')
    $('#frame-num').text('1')
    $('#roll').text('1')
    $('#nameTable').text(' ')
    $('#playername').show()
    $('#gamescore').text(' ')
    for (var i = 0; i < 11; i++) {
      $('#' + i).prop('disabled', false)
    }
    frame = 0
     game.resetGame()

   })

   gameOver = function() {
     if (game.currentFrame === 10 && game.currentRoll === 4) {
       $('#frame-num').hide()
       $('#roll').hide()
       for (var i = 0; i < 11; i++) {
         $('#' + i).prop('disabled', true);
       }
       $('#gamescore').text($('#nameInput').val() + " scored " + game.score() + '!')
     }
   }
})
